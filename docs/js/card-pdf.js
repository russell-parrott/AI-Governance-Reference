// card-pdf.js
// Fetches a card's markdown file and generates a downloadable PDF.
// Usage: import { downloadCardPDF } from "./card-pdf.js";
//        downloadCardPDF(card);   // card = object from cards.json
//
// Requires jsPDF on the page:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

const BRAND   = "#524d32";   // dark heading colour
const ACCENT  = "#c9c4a7";   // blue for code badges
const MUTED   = "#524D32";   // body/muted text colour
const TEXT    = "#524D32";   // body text colour
const RULE    = "#e5e7eb";   // light grey for dividers (table use only)
const BG      = "#f7f6f2";   // page background

const MARGIN  = 25;          // mm left/right
const TOP     = 25;          // mm top
const BOTTOM  = 25;          // mm bottom from page bottom
const WIDTH   = 210;         // A4 width mm
const USABLE  = WIDTH - MARGIN * 2;

// ── BACKGROUND ───────────────────────────────────────────────────────

function drawBackground(doc) {
	doc.setFillColor(BG);
	doc.rect(0, 0, 210, 297, "F");
}

// ── ENTRY POINT ────────────────────────────────────────────

export async function downloadCardPDF(card) {
	let md = "";
	try {
		const res = await fetch(`./cards/${card.file}`);
		if (!res.ok) throw new Error();
		md = await res.text();
	} catch {
		alert(`Could not load content for ${card.code}.`);
		return;
	}

	const { jsPDF } = window.jspdf;
	const doc = new jsPDF({ unit: "mm", format: "a4" });
	drawBackground(doc);

  const ctx = {
    doc,
    y: TOP,
    pageHeight: 297,
  };

  // Parse markdown into blocks
  const blocks = parseMarkdown(md);

  // Render cover header
  renderHeader(ctx, card);

  // Render blocks
  for (const block of blocks) {
    renderBlock(ctx, block);
  }

  // Page numbers
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(MUTED);
    doc.text(
      `AI Governance Reference — ${card.code} ${card.title}   |   Page ${i} of ${pageCount}`,
      MARGIN, 297 - 10
    );
  }

  doc.save(`${card.code}-${card.title.replace(/[^a-z0-9]+/gi, "-")}.pdf`);
}

// ── MARKDOWN PARSER ────────────────────────────────────────

function parseMarkdown(md) {
  const blocks = [];
  const raw = md.split(/\n\n+/);

  for (const block of raw) {
    const t = block.trim();
    if (!t) continue;

    // Skip H1 title — we render from card object
    if (/^#\s+/.test(t)) continue;

    // Horizontal rule
    if (/^---+$/.test(t)) {
      blocks.push({ type: "rule" });
      continue;
    }

    // Blockquote intro
    if (/^>\s+/.test(t)) {
      const text = t.replace(/^>\s+\*\*(.+)\*\*/, "$1").replace(/^>\s+/, "");
      blocks.push({ type: "intro", text });
      continue;
    }

    // H2
    if (/^##\s+/.test(t)) {
      blocks.push({ type: "h2", text: t.replace(/^##\s+/, "") });
      continue;
    }

    // H3
    if (/^###\s+/.test(t)) {
      blocks.push({ type: "h3", text: t.replace(/^###\s+/, "") });
      continue;
    }

    // Table
    if (t.includes("|") && t.split("\n").every(l => l.includes("|"))) {
      blocks.push({ type: "table", raw: t });
      continue;
    }

    // Bullet list
    if (/^[-*]\s+/.test(t)) {
      const items = t.split("\n").filter(l => /^[-*]\s+/.test(l.trim())).map(l => {
        const content = l.replace(/^[-*]\s+/, "").trim();
        const match = content.match(/^\*\*(.+?)\*\*\s*[—–-]\s*(.+)/);
        if (match) return { label: match[1], body: match[2] };
        return { label: null, body: content.replace(/\*\*(.+?)\*\*/g, "$1") };
      });
      blocks.push({ type: "list", items });
      continue;
    }

    // Arrow list: → CODE (Title) — desc
    if (t.split("\n").every(l => !l.trim() || l.trim().startsWith("→"))) {
      const items = t.split("\n").filter(l => l.trim()).map(l => {
        const raw = l.replace(/^→\s*/, "").trim();
        const match = raw.match(/^([A-Z]{2,3}-[A-Z0-9-]+)\s*\(([^)]+)\)\s*[—–-]?\s*(.*)/);
        if (match) return { code: match[1], title: match[2], body: match[3] || "" };
        return { code: null, title: null, body: raw.replace(/\*\*(.+?)\*\*/g, "$1") };
      });
      blocks.push({ type: "arrowlist", items });
      continue;
    } 
	
	if (t.startsWith("*")) continue;
    
	// Paragraph
   blocks.push({
  type: "para",
  text: t
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
});
  }

  return blocks;
}

// ── PAGE MANAGEMENT ────────────────────────────────────────

function checkPage(ctx, needed = 10) {
  if (ctx.y + needed > ctx.pageHeight - BOTTOM) {
    ctx.doc.addPage();
    drawBackground(ctx.doc);
    ctx.y = TOP;
  }
}

function gap(ctx, mm) {
  ctx.y += mm;
}

// ── HEADER ─────────────────────────────────────────────────

function renderHeader(ctx, card) {
  const { doc } = ctx;
 
  // Title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND);
  const titleLines = doc.splitTextToSize(card.title, USABLE);
  doc.text(titleLines, MARGIN, ctx.y);
  ctx.y += titleLines.length * 9 + 4;

  // Description
  if (card.description) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(MUTED);
    const descLines = doc.splitTextToSize(card.description, USABLE);
    doc.text(descLines, MARGIN, ctx.y);
    ctx.y += descLines.length * 5 + 4;
  }

  // Rule under header
  doc.setDrawColor(ACCENT);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, ctx.y, WIDTH - MARGIN, ctx.y);
  ctx.y += 6;
}

// ── BLOCK RENDERERS ────────────────────────────────────────

function renderBlock(ctx, block) {
  switch (block.type) {
    case "rule":      return renderRule(ctx);
    case "intro":     return renderIntro(ctx, block);
    case "h2":        return renderH2(ctx, block);
    case "h3":        return renderH3(ctx, block);
    case "para":      return renderPara(ctx, block);
    case "list":      return renderList(ctx, block);
    case "arrowlist": return renderArrowList(ctx, block);
    case "table":     return renderTable(ctx, block);
    case "footer":    return renderFooter(ctx, block);
  }
}

function renderRule(ctx) {
  ctx.y += 2;
}

function renderIntro(ctx, block) {
  const introX = MARGIN + 6;
  const introW = WIDTH - MARGIN - introX;   // full width to right margin
  const lines = ctx.doc.splitTextToSize(block.text, introW);
  checkPage(ctx, lines.length * 6 + 8);

  // Left accent bar
  ctx.doc.setFillColor(ACCENT);
  ctx.doc.rect(MARGIN, ctx.y, 2, lines.length * 6 + 2, "F");

  ctx.doc.setFontSize(11);
  ctx.doc.setFont("helvetica", "bolditalic");
  ctx.doc.setTextColor(BRAND);
  ctx.doc.text(lines, introX, ctx.y + 5);
  ctx.y += lines.length * 6 + 8;
}

function renderH2(ctx, block) {
  checkPage(ctx, 14);
  gap(ctx, 2);
  ctx.doc.setFontSize(13);
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setTextColor(BRAND);
  ctx.doc.text(block.text, MARGIN, ctx.y);
  ctx.y += 7;
}

function renderH3(ctx, block) {
  checkPage(ctx, 10);
  ctx.doc.setFontSize(11);
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setTextColor(BRAND);
  ctx.doc.text(block.text, MARGIN, ctx.y);
  ctx.y += 6;
}

function renderPara(ctx, block) {
  ctx.doc.setFontSize(10);
  const lines = ctx.doc.splitTextToSize(block.text, USABLE);
  checkPage(ctx, lines.length * 5 + 2);
  
  ctx.doc.setFont("helvetica", "normal");
  ctx.doc.setTextColor(TEXT);
  ctx.doc.text(lines, MARGIN, ctx.y);
  ctx.y += lines.length * 5 + 2;
}

function renderList(ctx, block) {
  for (const item of block.items) {
    const text = item.label ? `${item.label} — ${item.body}` : item.body;
    const lines = ctx.doc.splitTextToSize(text, USABLE - 6);
    checkPage(ctx, lines.length * 5 + 3);
    // Bullet dot
    ctx.doc.setFillColor(ACCENT);
    ctx.doc.circle(MARGIN + 1.5, ctx.y - 1, 1, "F");
    if (item.label) {
      // Bold label + normal body
      ctx.doc.setFontSize(10);
      ctx.doc.setFont("helvetica", "bold");
      ctx.doc.setTextColor(BRAND);
      const labelWidth = ctx.doc.getTextWidth(item.label + " - ");
      ctx.doc.text(item.label + " - ", MARGIN + 5, ctx.y);
      ctx.doc.setFont("helvetica", "normal");
      ctx.doc.setTextColor(TEXT);
      const bodyLines = ctx.doc.splitTextToSize(item.body, USABLE - 6 - labelWidth);
      // First line inline, rest indented
      ctx.doc.text(item.body.split(" ").slice(0, 8).join(" "), MARGIN + 5 + labelWidth, ctx.y);
      if (bodyLines.length > 1) {
         ctx.doc.text(bodyLines.slice(1), MARGIN + 5, ctx.y + 5);
        ctx.y += bodyLines.length * 5;
      }
    } else {
      ctx.doc.setFontSize(10);
      ctx.doc.setFont("helvetica", "normal");
      ctx.doc.setTextColor(TEXT);
      ctx.doc.text(lines, MARGIN + 5, ctx.y);
      ctx.y += (lines.length - 1) * 5;
    }
    ctx.y += 5;
  }
}

function renderTable(ctx, block) {
  const lines = block.raw.trim().split("\n").filter(l => l.trim());
  const rows  = lines.filter(l => !/^\s*\|?\s*[-:]+[-| :]*\s*\|?\s*$/.test(l));
  if (rows.length === 0) return;

  const parseRow = line =>
    line.replace(/^\||\|$/g, "").split("|").map(c =>
      c.trim().replace(/\*\*(.+?)\*\*/g, "$1")
    );

  const [head, ...body] = rows;
  const headCells = parseRow(head);
  const colCount  = headCells.length;
  const colW      = USABLE / colCount;
  const cellPad   = 2;
  const lineH     = 4.5;
  const cellPadV  = 2.5;

  // Pre-calculate all row heights based on wrapped content
  ctx.doc.setFontSize(9);
  const getRowH = (cells, font) => {
    ctx.doc.setFont("helvetica", font);
    const maxLines = Math.max(...cells.map(c =>
      ctx.doc.splitTextToSize(c, colW - cellPad * 2).length
    ));
    return maxLines * lineH + cellPadV * 2;
  };

  const headerH = getRowH(headCells, "bold");
  checkPage(ctx, headerH + 4);

  const BORDER = "#c9c4a7";
  const BW = 0.3;

  // Header row — filled, no stripe
  const startY = ctx.y;
  ctx.doc.setFillColor(BRAND);
  ctx.doc.rect(MARGIN, startY, USABLE, headerH, "F");
  ctx.doc.setFontSize(9);
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setTextColor("#ffffff");
  headCells.forEach((cell, i) => {
    const wrapped = ctx.doc.splitTextToSize(cell, colW - cellPad * 2);
    ctx.doc.text(wrapped, MARGIN + i * colW + cellPad, startY + cellPadV + lineH - 1);
    if (i > 0) {
      ctx.doc.setDrawColor(BORDER);
      ctx.doc.setLineWidth(BW);
      ctx.doc.line(MARGIN + i * colW, startY, MARGIN + i * colW, startY + headerH);
    }
  });
  ctx.doc.setDrawColor(BORDER);
  ctx.doc.setLineWidth(BW);
  ctx.doc.rect(MARGIN, startY, USABLE, headerH, "S");
  ctx.y = startY + headerH;

  // Body rows — no stripe, borders only
  body.forEach((row) => {
    const cells = parseRow(row);
    ctx.doc.setFont("helvetica", "normal");
    const rowH = getRowH(cells, "normal");
    checkPage(ctx, rowH + 2);

    ctx.doc.setFontSize(9);
    ctx.doc.setFont("helvetica", "normal");
    ctx.doc.setTextColor(TEXT);
    cells.forEach((cell, i) => {
      const wrapped = ctx.doc.splitTextToSize(cell, colW - cellPad * 2);
      ctx.doc.text(wrapped, MARGIN + i * colW + cellPad, ctx.y + cellPadV + lineH - 1);
      if (i > 0) {
        ctx.doc.setDrawColor(BORDER);
        ctx.doc.setLineWidth(BW);
        ctx.doc.line(MARGIN + i * colW, ctx.y, MARGIN + i * colW, ctx.y + rowH);
      }
    });
    ctx.doc.setDrawColor(BORDER);
    ctx.doc.setLineWidth(BW);
    ctx.doc.rect(MARGIN, ctx.y, USABLE, rowH, "S");
    ctx.y += rowH;
  });

  ctx.y += 5;
}


function renderArrowList(ctx, block) {
  for (const item of block.items) {
    const hasCode = item.code !== null;
    const codeText = hasCode ? `${item.code} (${item.title})` : "";
    const bodyText = item.body;

    checkPage(ctx, 10);

    // Arrow symbol
    ctx.doc.setFontSize(10);
    ctx.doc.setFont("helvetica", "bold");
    ctx.doc.setTextColor(ACCENT);
    ctx.doc.text("→", MARGIN, ctx.y);

    if (hasCode) {
      // Bold code label in accent colour
      ctx.doc.setFontSize(9);
      ctx.doc.setFont("helvetica", "bold");
      ctx.doc.setTextColor(ACCENT);
      const codeW = ctx.doc.getTextWidth(codeText + "  ");
      ctx.doc.text(codeText, MARGIN + 6, ctx.y);

      if (bodyText) {
        // Dash separator then normal body
        ctx.doc.setFont("helvetica", "normal");
        ctx.doc.setTextColor(TEXT);
        const separator = " — ";
        const sepW = ctx.doc.getTextWidth(separator);
        ctx.doc.text(separator, MARGIN + 6 + codeW, ctx.y);
        const remainW = USABLE - 6 - codeW - sepW;
        const bodyLines = ctx.doc.splitTextToSize(bodyText, remainW);
        ctx.doc.text(bodyLines[0] || "", MARGIN + 6 + codeW + sepW, ctx.y);
        if (bodyLines.length > 1) {
          ctx.y += 5;
          checkPage(ctx, bodyLines.length * 4.5);
          ctx.doc.text(bodyLines.slice(1), MARGIN + 6, ctx.y);
          ctx.y += (bodyLines.length - 1) * 4.5;
        }
      }
    } else {
      ctx.doc.setFontSize(9);
      ctx.doc.setFont("helvetica", "normal");
      ctx.doc.setTextColor(TEXT);
      const lines = ctx.doc.splitTextToSize(bodyText, USABLE - 8);
      ctx.doc.text(lines, MARGIN + 6, ctx.y);
      ctx.y += (lines.length - 1) * 4.5;
    }

    ctx.y += 6;
  }
}

function renderFooter(ctx, block) {}