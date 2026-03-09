// card.js
import { loadCards, cardByCode } from "./cards-search.js";
import { downloadCardPDF } from "./card-pdf.js";

const cardView    = document.getElementById("card-view");
const cardContent = document.getElementById("card-content");
const notFound    = document.getElementById("not-found");
const backButton  = document.getElementById("back-button");
const dlButton    = document.getElementById("download-pdf");

// ── BACK ───────────────────────────────────────────────────

backButton.addEventListener("click", () => history.back());

// ── MARKDOWN ───────────────────────────────────────────────

function renderMarkdown(md) {
  function inlineFormat(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function renderTable(block) {
    const lines = block.trim().split("\n").filter(l => l.trim());
    const rows = lines.filter(l => !/^\s*\|?\s*[-:]+[-| :]*\s*\|?\s*$/.test(l));
    if (!rows.length) return "";
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
    const items = block.trim().split("\n")
      .filter(l => /^[-*]\s+/.test(l.trim()))
      .map(l => `<li>${inlineFormat(l.replace(/^[-*]\s+/, "").trim())}</li>`)
      .join("\n");
    return `<ul>${items}</ul>`;
  }

  return md.split(/\n\n+/).map(block => {
    const t = block.trim();
    if (!t) return "";
    if (/^#\s+/.test(t))    return "";
    if (/^---$/.test(t))    return "";
    if (/^>\s+\*\*/.test(t))
      return t.replace(/^>\s+\*\*(.+?)\*\*/, "<div class='card-intro'>$1</div>");
    if (/^>\s+/.test(t))
      return `<div class='card-intro'>${inlineFormat(t.replace(/^>\s+/, ""))}</div>`;
    if (/^##\s+/.test(t))   return `<h2>${inlineFormat(t.replace(/^##\s+/, ""))}</h2>`;
    if (/^###\s+/.test(t))  return `<h3>${inlineFormat(t.replace(/^###\s+/, ""))}</h3>`;
    if (/^\*[^*].+[^*]\*$/.test(t))
      return `<p class='card-footer'>${t.slice(1, -1)}</p>`;
    if (t.includes("|") && t.split("\n").every(l => l.includes("|")))
      return renderTable(t);
    if (/^[-*]\s+/.test(t)) return renderList(t);
    if (t.startsWith("<"))  return t;
    return `<p>${inlineFormat(t)}</p>`;
  }).join("\n");
}

// ── META & SCHEMA ──────────────────────────────────────────

function setMeta(card) {
  const BASE  = "https://aigovernanceatlas.com";
  const url   = `${BASE}/card.html?code=${encodeURIComponent(card.code)}`;
  const raw   = card.description || "";
  const desc  = raw.length > 160 ? raw.slice(0, 157).replace(/\s\S+$/, "") + "..." : raw;
  const title = `${card.code} ${card.title} | AI Governance Atlas`;
  const image = `${BASE}/img/og-image.png`;

  document.title = title;

  function meta(selector, attr, value) {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr.split("=")[0], attr.split("=")[1].replace(/"/g, ""));
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  }

  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  meta(`meta[name="description"]`,        `name=description`,        desc);
  meta(`meta[property="og:type"]`,         `property=og:type`,        "article");
  meta(`meta[property="og:title"]`,        `property=og:title`,       title);
  meta(`meta[property="og:description"]`,  `property=og:description`, desc);
  meta(`meta[property="og:url"]`,          `property=og:url`,         url);
  meta(`meta[property="og:image"]`,        `property=og:image`,       image);
  meta(`meta[name="twitter:card"]`,        `name=twitter:card`,       "summary_large_image");
  meta(`meta[name="twitter:title"]`,       `name=twitter:title`,      title);
  meta(`meta[name="twitter:description"]`, `name=twitter:description`,desc);
  meta(`meta[name="twitter:image"]`,       `name=twitter:image`,      image);

  let schema = document.getElementById("dynamic-schema");
  if (!schema) {
    schema = document.createElement("script");
    schema.id = "dynamic-schema";
    schema.type = "application/ld+json";
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": card.title,
    "description": desc,
    "identifier": card.code,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "AI Governance Atlas",
      "url": BASE
    },
    "url": url
  });
}

// ── INIT ───────────────────────────────────────────────────

async function init() {
  const code = new URLSearchParams(window.location.search).get("code");
  const allCards = await loadCards();
  const card = code ? cardByCode(code, allCards) : null;

  if (!card) {
    notFound.hidden = false;
    return;
  }

  setMeta(card);
  dlButton.onclick = () => downloadCardPDF(card);

  // Related links
  const relatedLinks = (card.related || []).map(relCode => {
    const rel = cardByCode(relCode, allCards);
    return rel
      ? `<a class="related-link" href="card.html?code=${encodeURIComponent(rel.code)}">${rel.code} — ${rel.title}</a>`
      : "";
  }).filter(Boolean).join("");

  cardContent.innerHTML = `
    ${relatedLinks ? `
    <div id="card-related">
      <span id="related-label">Related cards</span>
      <div id="related-links">${relatedLinks}</div>
    </div>` : ""}
    <h1 id="card-title">${card.title}</h1>
    <div id="card-body"><p id="card-placeholder">Loading...</p></div>
  `;

  cardView.hidden = false;

  try {
    const res = await fetch(`./cards/${card.file}`);
    if (!res.ok) throw new Error();
    const md = await res.text();
    document.getElementById("card-placeholder").outerHTML = renderMarkdown(md);
  } catch {
    document.getElementById("card-placeholder").textContent =
      `Content for "${card.title}" could not be loaded.`;
  }
}

init();
