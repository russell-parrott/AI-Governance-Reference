// app.js
import { loadCards, searchCards, cardByCode } from "./cards-search.js";

let allCards = [];
let allQuestions = [];
let searchTimer = null;

const searchInput  = document.getElementById("search-input");
const emptyState   = document.getElementById("empty-state");
const resultsPanel = document.getElementById("results-panel");
const cardView     = document.getElementById("card-view");
const cardContent  = document.getElementById("card-content");
const backButton   = document.getElementById("back-button");

// ── STATE ──────────────────────────────────────────────────

function showEmpty() {
  emptyState.hidden   = false;
  resultsPanel.hidden = true;
  cardView.hidden     = true;
}

function showResults() {
  emptyState.hidden   = true;
  resultsPanel.hidden = false;
  cardView.hidden     = true;
}

function showCard() {
  emptyState.hidden   = true;
  resultsPanel.hidden = true;
  cardView.hidden     = false;
}

// ── SEARCH ─────────────────────────────────────────────────

["input", "keyup"].forEach(evt => searchInput.addEventListener(evt, () => {
  clearTimeout(searchTimer);
  const query = searchInput.value.trim();

  if (query.length < 2) {
    showEmpty();
    return;
  }

  searchTimer = setTimeout(() => {
    const results = searchCards(query, allCards);
    renderResults(results);
    showResults();
  }, 250);
}));

// ── RESULTS ────────────────────────────────────────────────

function renderResults(results) {
  setSchema(schemaForResults(results));
  if (results.length === 0) {
    resultsPanel.innerHTML = `<p id="no-results">No cards found. Try a different term.</p>`;
    return;
  }

  resultsPanel.innerHTML = results.map(card => {
    const badge = card.tier && card.tier !== "High"
      ? `<span class="tier-badge tier-${card.tier.toLowerCase().replace(" ", "-")}">${card.tier}</span>`
      : "";
    return `
      <div class="result-strip" data-code="${card.code}">
        <span class="card-code">${card.code}</span>
        <span class="card-title">${card.title}</span>
        ${badge}
      </div>`;
  }).join("");

  resultsPanel.querySelectorAll(".result-strip").forEach(strip => {
    strip.addEventListener("click", () => openCard(strip.dataset.code));
  });
}

// ── CARD VIEW ──────────────────────────────────────────────

function openCard(code) {
  const card = cardByCode(code, allCards);
  if (!card) return;
  setSchema(schemaForCard(card));

  const relatedLinks = (card.related || []).map(relCode => {
    const rel = cardByCode(relCode, allCards);
    return rel
      ? `<span class="related-link" data-code="${rel.code}">${rel.code} — ${rel.title}</span>`
      : "";
  }).join("");

  cardContent.innerHTML = `
    <div id="card-header">
      <span class="card-code">${card.code}</span>
      <span class="card-section">${card.section}</span>
    </div>
    <h1 id="card-title">${card.title}</h1>
    <div id="card-body"><p id="card-placeholder">Loading...</p></div>
    ${relatedLinks ? `
    <div id="card-related">
      <span id="related-label">Related cards</span>
      <div id="related-links">${relatedLinks}</div>
    </div>` : ""}
  `;

  cardContent.querySelectorAll(".related-link").forEach(link => {
    link.addEventListener("click", () => openCard(link.dataset.code));
  });

  fetchCardContent(card.file, card.title);
  renderCardQuestion(card);
  showCard();
  window.scrollTo(0, 0);
}

async function fetchCardContent(filename, title) {
  try {
    const response = await fetch(`./cards/${filename}`);
    console.log(filename, title)
	if (!response.ok) throw new Error();
    const md = await response.text();
    document.getElementById("card-placeholder").outerHTML = renderMarkdown(md);
  } catch {
    document.getElementById("card-placeholder").textContent =
      `Content for "${title}" could not be loaded.`;
  }
}

// ── MARKDOWN ───────────────────────────────────────────────

function renderMarkdown(md) {
  function inlineFormat(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function renderTable(block) {
    const lines = block.trim().split("\n").filter(l => l.trim());
    const rows = lines.filter(l => !/^\s*\|?\s*[-:]+[-| :]*\s*\|?\s*$/.test(l));
    if (rows.length === 0) return "";
    const parseRow = line =>
      line.replace(/^\||\|$/g, "").split("|").map(c => inlineFormat(c.trim()));
    const [head, ...body] = rows;
    const headCells = parseRow(head).map(c => `<th>${c}</th>`).join("");
    const bodyRows  = body.map(r =>
      `<tr>${parseRow(r).map(c => `<td>${c}</td>`).join("")}</tr>`
    ).join("\n");
    return `<table><thead><tr>${headCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  }

  function renderList(block) {
    const items = block.trim().split("\n").map(l =>
      `<li>${inlineFormat(l.replace(/^[-*]\s+/, "").trim())}</li>`
    ).join("\n");
    return `<ul>${items}</ul>`;
  }

  const blocks = md.split(/\n\n+/);

  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return "";
    if (/^#\s+/.test(trimmed)) return "";
    if (/^>\s+\*\*/.test(trimmed))
      return trimmed.replace(/^>\s+\*\*(.+?)\*\*/, "<div class='card-intro'>$1</div>");
    if (/^##\s+/.test(trimmed))  return `<h2>${inlineFormat(trimmed.replace(/^##\s+/, ""))}</h2>`;
    if (/^###\s+/.test(trimmed)) return `<h3>${inlineFormat(trimmed.replace(/^###\s+/, ""))}</h3>`;
    if (/^---$/.test(trimmed)) return "";
    if (/^\*[^*].+[^*]\*$/.test(trimmed))
      return `<p class='card-footer'>${trimmed.slice(1, -1)}</p>`;
    if (trimmed.includes("|") && trimmed.split("\n").every(l => l.includes("|")))
      return renderTable(trimmed);
    if (/^[-*]\s+/.test(trimmed))
      return renderList(trimmed);
    if (trimmed.startsWith("<")) return trimmed;
    return `<p>${inlineFormat(trimmed)}</p>`;
  }).join("\n");
}


// ── SCHEMA ─────────────────────────────────────────────────

function setSchema(obj) {
  let el = document.getElementById("dynamic-schema");
  if (!el) {
    el = document.createElement("script");
    el.id = "dynamic-schema";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}

function schemaForResults(results) {
  return {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "name": "AI Governance Atlas Search",
    "url": window.location.href,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": results.slice(0, 5).map((card, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": card.title,
        "description": card.description || "",
        "url": `https://russell-parrott.github.io/ai-governance-reference/search.html?search=${encodeURIComponent(titleSlug(card))}`
      }))
    }
  };
}

function schemaForCard(card) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": card.title,
    "description": card.description || "",
    "identifier": card.code,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "AI Governance Atlas",
      "url": "https://russell-parrott.github.io/ai-governance-reference/"
    },
    "url": `https://russell-parrott.github.io/ai-governance-reference/search.html?search=${encodeURIComponent(titleSlug(card))}`
  };
}

function titleSlug(card) {
  return card.code.toLowerCase() + "-" +
    card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ── BACK ───────────────────────────────────────────────────

backButton.addEventListener("click", () => showResults());

// ── QUESTIONS ──────────────────────────────────────────────

async function loadQuestions() {
  try {
    const res = await fetch("./js/questions.json");
    if (!res.ok) throw new Error();
    allQuestions = await res.json();
  } catch {
    allQuestions = [];
  }
}

function pickRandomQuestion(filterFn = null) {
  const pool = filterFn ? allQuestions.filter(filterFn) : allQuestions;
  if (!pool.length) return null;
  // Weight core:true questions 3x
  const weighted = pool.flatMap(q => q.core ? [q, q, q] : [q]);
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function renderEmptyQuestion() {
  const q = pickRandomQuestion();
  if (!q) return;
  const el = document.getElementById("probe-question");
  if (el) el.textContent = q.question;
}

function renderCardQuestion(card) {
  const q = pickRandomQuestion(
    q => q.category === card.code.split("-")[0] ||
         (q.related || []).includes(card.code)
  );
  if (!q) return;
  const existing = document.getElementById("card-question");
  if (existing) existing.remove();
  const div = document.createElement("div");
  div.id = "card-question";
  div.innerHTML = `<span id="card-question-label">Consider</span><p>${q.question}</p>`;
  cardContent.appendChild(div);
}

// ── INIT ───────────────────────────────────────────────────

async function init() {
  allCards = await loadCards();
  await loadQuestions();
  const params = new URLSearchParams(window.location.search);
  const q = params.get("search");
  if (q) {
    searchInput.value = q;
    const results = searchCards(q, allCards);
    renderResults(results);
    showResults();
  } else {
    renderEmptyQuestion();
    showEmpty();
  }
}

init();