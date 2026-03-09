// search.js
import { loadCards, searchCards } from "./cards-search.js";

let allCards = [];
let allQuestions = [];

const searchInput  = document.getElementById("search-input");
const emptyState   = document.getElementById("empty-state");
const resultsPanel = document.getElementById("results-panel");
const probeQuestion = document.getElementById("probe-question");

// ── QUESTIONS ──────────────────────────────────────────────

async function loadQuestions() {
  try {
    const res = await fetch("./questions.json");
    if (!res.ok) throw new Error();
    allQuestions = await res.json();
  } catch {
    allQuestions = [];
  }
}

function pickRandomQuestion() {
  if (!allQuestions.length) return null;
  const weighted = allQuestions.flatMap(q => q.core ? [q, q, q] : [q]);
  return weighted[Math.floor(Math.random() * weighted.length)];
}

// ── RESULTS ────────────────────────────────────────────────

function renderResults(results) {
  emptyState.hidden   = true;
  resultsPanel.hidden = false;

  if (!results.length) {
    resultsPanel.innerHTML = `<p id="no-results">No cards found. Try a different term.</p>`;
    return;
  }

  resultsPanel.innerHTML = results.map(card => `
    <a class="result-strip" href="card.html?code=${encodeURIComponent(card.code)}">
      <span class="card-code">${card.code}</span>
      <span class="card-title">${card.title}</span>
    </a>
  `).join("");
}

// ── INIT ───────────────────────────────────────────────────

async function init() {
  [allCards] = await Promise.all([loadCards(), loadQuestions()]);

  const q = new URLSearchParams(window.location.search).get("search") || "";

  if (q.trim().length >= 2) {
    searchInput.value = q;
    renderResults(searchCards(q, allCards));
  } else {
    emptyState.hidden = false;
    resultsPanel.hidden = true;
    const question = pickRandomQuestion();
    if (question && probeQuestion) probeQuestion.textContent = question.question;
  }
}

init();
