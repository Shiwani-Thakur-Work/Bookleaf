/**
 * HTML Templates for Journal Pages
 * Generates semantic, styled pages for the front cover, table of contents,
 * book spreads (left & right pages), and back cover.
 */

const Templates = {
  // Front Hardcover
  frontCover() {
    return `
      <div class="page-inner cover-page cover-front">
        <div class="cover-emboss-border">
          <div class="cover-inner-frame">
            <div class="cover-ornament top-ornament">✦ ✦ ✦</div>
            <div class="cover-monogram">
              <span class="monogram-symbol">❧</span>
            </div>
            <h1 class="cover-title">THE READING<br><span class="title-sub">SANCTUARY</span></h1>
            <div class="cover-divider">
              <span class="divider-line"></span>
              <span class="divider-diamond">◈</span>
              <span class="divider-line"></span>
            </div>
            <p class="cover-subtitle">A Personal Chronicle of Books, Resonances, Quotes & Marginalia</p>
            <div class="cover-meta">
              <span class="cover-volume">VOLUME I</span>
              <span class="cover-bullet">•</span>
              <span class="cover-edition">FOLIO EDITION</span>
            </div>
            <div class="cover-action">
              <button class="btn-open-book" id="btn-open-book">
                <span class="btn-label">Open Journal</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
            <div class="cover-ornament bottom-ornament">✦ ✦ ✦</div>
          </div>
        </div>
      </div>
    `;
  },

  // Page 1: Bookplate / Ex Libris
  bookplatePage(books) {
    const totalQuotes = books.reduce((acc, b) => acc + (b.quotes ? b.quotes.length : 0), 0);
    const totalStories = books.reduce((acc, b) => acc + (b.stories ? b.stories.length : 0), 0);

    return `
      <div class="page-inner interior-page page-left bookplate-page">
        <div class="page-header">
          <span class="header-left">EX LIBRIS</span>
          <span class="header-right">ARCHIVE</span>
        </div>
        
        <div class="bookplate-card">
          <div class="bookplate-border">
            <span class="bookplate-tag">PRIVATE JOURNAL</span>
            <div class="bookplate-insignia">⚜</div>
            <h2 class="bookplate-owner">Shiwani's Reading Archive</h2>
            <p class="bookplate-quote">
              "We read to know we are not alone. In these pages lie the thoughts, 
              arguments, and stories that reshaped how I perceive the world."
            </p>
            <div class="bookplate-ribbon-tag">Est. 2026</div>
          </div>
        </div>

        <div class="reading-stats-grid">
          <div class="stat-pill">
            <span class="stat-num">${books.length}</span>
            <span class="stat-name">Books Logged</span>
          </div>
          <div class="stat-pill">
            <span class="stat-num">${totalQuotes}</span>
            <span class="stat-name">Quotes Saved</span>
          </div>
          <div class="stat-pill">
            <span class="stat-num">${totalStories}</span>
            <span class="stat-name">Stories Kept</span>
          </div>
        </div>

        <div class="bookplate-philosophy">
          <h4 class="philosophy-title">How I Read & Record</h4>
          <p class="philosophy-text">
            Not for speed, nor for volume. I read looking for a sentence that stops me mid-breath, 
            a story that reframes a struggle, or an idea that turns into a permanent mental companion.
          </p>
        </div>

        <div class="page-footer">
          <span class="page-num">i</span>
        </div>
      </div>
    `;
  },

  // Page 2: Table of Contents / Index
  tableOfContentsPage(books) {
    // Generate genre tags
    const allTags = new Set();
    books.forEach(b => b.genreTags?.forEach(t => allTags.add(t)));
    const tagsArray = Array.from(allTags);

    const bookList = books.map((b, idx) => {
      const targetSpread = idx + 1; // Spread 0 is TOC/Bookplate, Book 0 is spread 1
      const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][idx] || (idx + 1);
      return `
        <li class="toc-item" data-spread="${targetSpread}" data-tags="${(b.genreTags || []).join(' ')}">
          <div class="toc-meta">
            <span class="toc-roman">${roman}.</span>
            <span class="toc-title">${b.title}</span>
            <span class="toc-author">— ${b.author}</span>
          </div>
          <span class="toc-dots"></span>
          <span class="toc-page-link">p. ${targetSpread * 2 + 1}</span>
        </li>
      `;
    }).join('');

    const tagPills = ['All', ...tagsArray].map(t => `
      <button class="filter-chip ${t === 'All' ? 'active' : ''}" data-filter="${t}">${t}</button>
    `).join('');

    return `
      <div class="page-inner interior-page page-right toc-page">
        <div class="page-header">
          <span class="header-left">CONTENTS</span>
          <span class="header-right">INDEX</span>
        </div>

        <div class="toc-heading-area">
          <h2 class="toc-main-title">Table of Readings</h2>
          <div class="toc-search-bar">
            <span class="search-icon">🔍</span>
            <input type="text" id="toc-search-input" placeholder="Search by title, author, or keyword..." />
          </div>
          <div class="toc-filters">
            ${tagPills}
          </div>
        </div>

        <ul class="toc-list" id="toc-list">
          ${bookList}
        </ul>

        <div class="toc-hint">
          <span>Click any entry to jump directly to its pages</span>
        </div>

        <div class="page-footer">
          <span class="page-num">ii</span>
        </div>
      </div>
    `;
  },

  // Book Spread: Left Page (Book Metadata, Reflection & Key Themes)
  bookSpreadLeft(book, pageNum) {
    const stars = '★'.repeat(book.rating || 5) + '☆'.repeat(5 - (book.rating || 5));
    const tags = (book.genreTags || []).map(t => `<span class="tag-badge">${t}</span>`).join('');

    const topicsHtml = (book.topics || []).map(tp => `
      <div class="topic-item">
        <span class="topic-bullet">◈</span>
        <div class="topic-content">
          <strong class="topic-name">${tp.name}:</strong>
          <span class="topic-desc">${tp.takeaway}</span>
        </div>
      </div>
    `).join('');

    return `
      <div class="page-inner interior-page page-left book-content-page">
        <div class="page-header">
          <span class="header-left">${book.author.toUpperCase()}</span>
          <span class="header-right">${book.dateRead || ''}</span>
        </div>

        <div class="book-identity-card" style="--accent: ${book.accentColor || '#8B1E1E'}">
          <div class="book-spine-mini">
            <span class="mini-symbol">${book.coverSymbol || '📖'}</span>
          </div>
          <div class="book-identity-text">
            <div class="book-tags">${tags}</div>
            <h2 class="book-title">${book.title}</h2>
            <div class="book-author-line">
              <span class="author-name">by ${book.author}</span>
              <span class="pub-year">(${book.year})</span>
              <span class="star-rating" title="${book.rating} out of 5 stars">${stars}</span>
            </div>
          </div>
        </div>

        <div class="one-liner-banner">
          <span class="one-liner-quote">“${book.oneLiner}”</span>
        </div>

        <div class="section-container">
          <div class="section-title-wrap">
            <span class="section-icon">❦</span>
            <h3 class="section-title">The Core Spark (What I Liked)</h3>
          </div>
          <div class="reflection-body">
            <p>${book.whatILiked}</p>
          </div>
        </div>

        ${topicsHtml ? `
        <div class="section-container topics-container">
          <div class="section-title-wrap">
            <span class="section-icon">◈</span>
            <h3 class="section-title">Core Concepts & Mental Models</h3>
          </div>
          <div class="topics-list">
            ${topicsHtml}
          </div>
        </div>
        ` : ''}

        <div class="page-footer">
          <span class="page-num">${pageNum}</span>
        </div>
      </div>
    `;
  },

  // Book Spread: Right Page (Quotes, Stories & Marginalia Post-It)
  bookSpreadRight(book, pageNum) {
    const quotesHtml = (book.quotes || []).map(q => `
      <blockquote class="journal-quote">
        <div class="quote-text-wrap">
          <span class="quote-mark">“</span>
          <p class="quote-text">${q.text}</p>
        </div>
        <div class="quote-citation">
          <span class="quote-page">p. ${q.page}</span>
          ${q.note ? `<span class="quote-note">— ${q.note}</span>` : ''}
        </div>
      </blockquote>
    `).join('');

    const storiesHtml = (book.stories || []).map(s => `
      <div class="story-box">
        <h4 class="story-title">
          <span class="story-feather">🪶</span> ${s.title}
        </h4>
        <p class="story-summary">${s.summary}</p>
      </div>
    `).join('');

    const marg = book.marginalia;

    return `
      <div class="page-inner interior-page page-right book-content-page">
        <div class="page-header">
          <span class="header-left">${book.title.toUpperCase()}</span>
          <span class="header-right">NOTES & QUOTES</span>
        </div>

        ${quotesHtml ? `
        <div class="section-container quotes-container">
          <div class="section-title-wrap">
            <span class="section-icon">❝</span>
            <h3 class="section-title">Standout Passages</h3>
          </div>
          <div class="quotes-list">
            ${quotesHtml}
          </div>
        </div>
        ` : ''}

        ${storiesHtml ? `
        <div class="section-container stories-container">
          <div class="section-title-wrap">
            <span class="section-icon">🕮</span>
            <h3 class="section-title">Memorable Stories & Parables</h3>
          </div>
          <div class="stories-list">
            ${storiesHtml}
          </div>
        </div>
        ` : ''}

        ${marg ? `
        <div class="marginalia-postit">
          <div class="postit-pin">${marg.sticker || '📌'}</div>
          <div class="postit-content">
            <p class="postit-note">${marg.note}</p>
            <div class="postit-date">${marg.date || ''} • personal marginalia</div>
          </div>
        </div>
        ` : ''}

        <div class="page-footer">
          <span class="page-num">${pageNum}</span>
        </div>
      </div>
    `;
  },

  // Final Spread Left: Epilogue / Shelf reflections
  epiloguePage(books) {
    return `
      <div class="page-inner interior-page page-left epilogue-page">
        <div class="page-header">
          <span class="header-left">EPILOGUE</span>
          <span class="header-right">REFLECTIONS</span>
        </div>

        <div class="epilogue-content">
          <div class="epilogue-icon">☕</div>
          <h2 class="epilogue-title">The Reading Desk</h2>
          <p class="epilogue-lead">
            "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          </p>
          <div class="epilogue-divider">✤ ✤ ✤</div>
          
          <h4 class="epilogue-sub">Reflections on This Volume</h4>
          <p class="epilogue-text">
            Every book in this journal was read slowly, with a pencil in hand. 
            The thoughts recorded here are not definitive reviews, but snapshots of what 
            ignited a spark at this particular crossroads in time.
          </p>

          <div class="reading-queue-box">
            <h5 class="queue-heading">Currently On My Nightstand</h5>
            <ul class="queue-list">
              <li><span>✦</span> <em>Stoner</em> — John Williams</li>
              <li><span>✦</span> <em>Four Thousand Weeks</em> — Oliver Burkeman</li>
              <li><span>✦</span> <em>Man's Search for Meaning</em> — Viktor Frankl</li>
            </ul>
          </div>
        </div>

        <div class="page-footer">
          <span class="page-num">iii</span>
        </div>
      </div>
    `;
  },

  // Final Spread Right: How to Add Your Next Book
  howToAddPage() {
    return `
      <div class="page-inner interior-page page-right howto-page">
        <div class="page-header">
          <span class="header-left">HOW-TO GUIDE</span>
          <span class="header-right">MAINTENANCE</span>
        </div>

        <div class="howto-content">
          <div class="howto-badge">⚡ GITHUB PAGES READY</div>
          <h2 class="howto-title">Adding Your Next Book</h2>
          <p class="howto-lead">
            Zero databases, zero build steps. To log your next book, open <code class="code-pill">data/books.json</code> and append a new entry:
          </p>

          <pre class="json-sample-snippet"><code>{
  "id": "your-book-slug",
  "title": "Book Title",
  "author": "Author Name",
  "year": "2026",
  "genreTags": ["Philosophy"],
  "rating": 5,
  "whatILiked": "Your thoughts...",
  "quotes": [
    { "text": "A quote...", "page": "42" }
  ],
  "marginalia": {
    "note": "A personal post-it note..."
  }
}</code></pre>

          <div class="github-steps-box">
            <div class="gh-step">
              <span class="gh-step-num">1</span>
              <span>Edit <code>data/books.json</code></span>
            </div>
            <div class="gh-step">
              <span class="gh-step-num">2</span>
              <span>Commit & push to GitHub</span>
            </div>
            <div class="gh-step">
              <span class="gh-step-num">3</span>
              <span>GitHub Pages auto-deploys in 30 seconds!</span>
            </div>
          </div>
        </div>

        <div class="page-footer">
          <span class="page-num">iv</span>
        </div>
      </div>
    `;
  },

  // Back Hardcover
  backCover() {
    return `
      <div class="page-inner cover-page cover-back">
        <div class="cover-emboss-border">
          <div class="cover-inner-frame">
            <div class="back-seal">❧</div>
            <h3 class="back-title">THE READING SANCTUARY</h3>
            <p class="back-colophon">
              Curated with quiet reverence for the written word.<br>
              Designed as a static digital book journal.<br>
              Hosted natively on GitHub Pages.
            </p>
            <div class="back-action">
              <button class="btn-return-start" id="btn-return-start">
                <span>↺ Return to Beginning</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

window.Templates = Templates;
