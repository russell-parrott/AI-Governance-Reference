// cards-search.js
// Plain browser JavaScript — no Node.js, no require, works fully offline
// Assumes cards.json has been pre-built and is available as a static file

let cardsData = [];

// Load the pre-built cards.json (fetched once, then cached by the service worker)
async function loadCards() {
  if (cardsData.length > 0) return cardsData;
  const response = await fetch("./js/cards.json");
  cardsData = await response.json();
  return cardsData;
}

// Stopwords — declared once, used by tokenize
const STOPWORDS = new Set([
  // original list
  "this","that","with","from","into","about","their","they","them",
  "your","what","when","where","how","who","will","must","able",
  "each","most",
  // articles and prepositions
  "the","and","for","not","are","has","have","had","been","were",
  "was","its","our","does","did","can","could","would",
  "should","shall","may","might","also","only","even","just",
  // question preamble words
  "explain","define","meaning","means","mean","tell","show",
  "give","help","need","want","know","understand","please",
  // short connectives that survive the 4-char filter
  "then","than","such","some","many","more","less","well",
  "very","much","same","other","these","those","both","whether"
]);

// Same tokenizer as the build script — must stay in sync with it
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[`_*#>\[\]\(\)\|]/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(w => w.length >= 4)
    .filter(w => !STOPWORDS.has(w));
}

// Search cards by query
// Returns array of matching cards, each with confidence (0-100) and tier label
// High-scoring cards also pull in their related cards as "See also" entries
function searchCards(query, cards) {
  if (!query || query.trim().length < 2) return [];

  const queryTokens = tokenize(query);
  const queryFull = query.toLowerCase().trim();

  const scored = cards.map(card => {
    let score = 0;

    // Code match — e.g. user typed "AR-01" (highest value, unambiguous)
    if (card.code.toLowerCase() === queryFull) score += 20;

    // Exact full-phrase match in keywords
    if (card.keywords.includes(queryFull)) score += 10;

    // Partial phrase match in title
    if (card.title.toLowerCase().includes(queryFull)) score += 8;

    // Token-level keyword matches
    for (const token of queryTokens) {
      for (const kw of card.keywords) {
        if (kw === token) score += 2;
        else if (kw.includes(token)) score += 1;
      }
    }

    return { card, score };
  });

  // Step 1 — collect related codes from the top 3 scorers
  const top3 = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const topRelatedCodes = new Set(
    top3.flatMap(s => s.card.related || [])
  );

  // Step 2 — boost any scored card that appears in those related arrays
  scored.forEach(s => {
    if (topRelatedCodes.has(s.card.code)) s.score += 3;
  });

  // Step 3 — re-sort after boost, apply cutoffs, build main results
  const maxScore = Math.max(...scored.map(s => s.score), 1);

  const results = scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ card, score }) => {
      const pct = score / maxScore;
      const confidence = Math.round(pct * 100);
      if (confidence < 15) return null;
      return {
        ...card,
        confidence,
        tier: pct >= 0.75 ? "High"
            : pct >= 0.40 ? "Related"
            : "Partial"
      };
    })
    .filter(Boolean);

  // Step 4 — append "See also" from High-tier related arrays
  // only cards that didn't appear in scored results at all
  const scoredCodes = new Set(results.map(r => r.code));

  const highResults = results.filter(r => r.tier === "High");
  const seeAlsoCodes = [
    ...new Set(highResults.flatMap(r => r.related || []))
  ].filter(code => !scoredCodes.has(code));

  const seeAlso = seeAlsoCodes
    .slice(0, 3)
    .map(code => {
      const card = cards.find(c => c.code === code);
      if (!card) return null;
      return { ...card, confidence: null, tier: "See also" };
    })
    .filter(Boolean);

  return [...results, ...seeAlso];
}

// Get all cards in a section
function cardsBySection(section, cards) {
  return cards.filter(c => c.section === section);
}

// Get all unique sections
function allSections(cards) {
  return [...new Set(cards.map(c => c.section))];
}

// Get a single card by code (e.g. "AR-01")
function cardByCode(code, cards) {
  return cards.find(c => c.code === code) || null;
}

// Export for use as a module (works in modern browsers and build tools)
// If not using modules, these functions are just globals — remove this block
export { loadCards, searchCards, cardsBySection, allSections, cardByCode };
