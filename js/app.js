/**
 * The Reading Sanctuary — Main Controller
 * Modern 3D Standalone Bookshelf + Authentic 3D Page Flip Book Reader
 */

const DEFAULT_BOOKS = [
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "author": "James Clear",
    "year": "2018",
    "genreTags": ["Habits", "Psychology", "Productivity"],
    "rating": 5,
    "dateRead": "September 2026",
    "accentColor": "#A44C28",
    "coverSymbol": "⚡",
    "oneLiner": "You do not rise to the level of your goals. You fall to the level of your systems.",
    "whatILiked": "The most empowering book on human behavior I have encountered. Clear dismantles the myth that massive success requires monumental willpower. Instead, he treats identity as a daily vote: every small choice casts a ballot for who you want to become. This completely shifted how I structure my mornings and reading routines.",
    "quotes": [
      {
        "text": "Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity.",
        "page": "38",
        "loc": "Loc 412",
        "note": "Identity-first, outcome-second."
      },
      {
        "text": "You do not rise to the level of your goals. You fall to the level of your systems. Your goal is your desired outcome; your system is the collection of daily habits that will get you there.",
        "page": "27",
        "loc": "Loc 284",
        "note": "Systems outlast fleeting motivation."
      },
      {
        "text": "Be the designer of your world and not merely the consumer of it. Never depend on willpower when environment design can remove the friction.",
        "page": "86",
        "loc": "Loc 890",
        "note": "Visual cues dictate daily action."
      }
    ],
    "stories": [
      {
        "title": "The British Cycling Renaissance",
        "summary": "For nearly a century, British cyclists won almost nothing. In 2003, performance director Dave Brailsford looked for 1% improvements everywhere: redesigned bike seats for comfort, rubbed alcohol on tires for grip, and carried each rider's personal pillow to hotels for optimal sleep. Within 5 years, they dominated the Olympics and won 5 Tour de France titles."
      }
    ],
    "topics": [
      {
        "name": "The 4 Laws of Behavior Change",
        "takeaway": "Make it obvious (cue), Make it attractive (craving), Make it easy (response), Make it satisfying (reward). Invert these 4 to break bad habits."
      },
      {
        "name": "The Two-Minute Rule",
        "takeaway": "When starting a new habit, scale it down until it takes less than two minutes. Standardize before you optimize."
      }
    ],
    "marginalia": {
      "note": "Action item: Keep my current physical book on my pillow every morning. When I head to bed, reading has zero friction!",
      "date": "Sep 28",
      "sticker": "📌"
    }
  },
  {
    "id": "meditations",
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "year": "180 AD",
    "genreTags": ["Philosophy", "Stoicism", "Ancient Wisdom"],
    "rating": 5,
    "dateRead": "August 2026",
    "accentColor": "#29455E",
    "coverSymbol": "🏛️",
    "oneLiner": "You have power over your mind — not outside events. Realize this, and you will find strength.",
    "whatILiked": "Reading this feels like eavesdropping on the private soul of the most powerful man in the ancient world. Marcus never intended these pages to be published; they were private self-admonitions written in military campaign tents. His humility, ruthless self-honesty, and acceptance of mortality are profoundly grounding.",
    "quotes": [
      {
        "text": "The soul becomes dyed with the color of its thoughts. If you dwell on petty grievances, your spirit grows small. Dwell on virtue, and your mind stays expansive.",
        "page": "Book V, 16",
        "loc": "Loc 620",
        "note": "Curate what you allow your mind to linger on."
      },
      {
        "text": "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love. Meet the day not with dread, but as a temporary gift.",
        "page": "Book II, 1",
        "loc": "Loc 145",
        "note": "Morning orientation."
      },
      {
        "text": "Waste no more time arguing about what a good man should be. Be one.",
        "page": "Book X, 16",
        "loc": "Loc 1290",
        "note": "Action over endless debate."
      }
    ],
    "stories": [
      {
        "title": "Journaling Along the Frozen Danube",
        "summary": "During the Marcomannic Wars, while battling brutal winter storms and a plague that ravaged Rome, Marcus sat in his military tent along the frozen Danube river. Rather than seeking revenge against political betrayals, he used his journal to remind himself to remain calm, treat difficult people with patience, and accept nature's seasons without anger."
      }
    ],
    "topics": [
      {
        "name": "The Dichotomy of Control",
        "takeaway": "Distinguish between things within your power (judgments, intentions, actions) and things outside it (reputation, weather, outcomes). Invest zero anxiety in the latter."
      },
      {
        "name": "The View from Above",
        "takeaway": "Zoom out mentally until cities and disputes look like specks of dust. Cosmic scale restores harmless proportion to everyday anxieties."
      }
    ],
    "marginalia": {
      "note": "When someone is rude in email or traffic: Remember they act from blindness to what is truly good. They cannot stain my character unless I react in kind.",
      "date": "Aug 14",
      "sticker": "⚔️"
    }
  },
  {
    "id": "psychology-of-money",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "year": "2020",
    "genreTags": ["Finance", "Psychology", "Life Philosophy"],
    "rating": 5,
    "dateRead": "July 2026",
    "accentColor": "#1D4E3E",
    "coverSymbol": "⏳",
    "oneLiner": "Doing well with money has a little to do with how smart you are and a lot to do with how you behave.",
    "whatILiked": "Not a single boring spreadsheet or dry formula in sight. Housel treats money as a study of human psychology: ego, envy, fear, and freedom. The chapter on 'Freedom' resonated deeply — that wealth's greatest dividend is not shiny toys, but the ability to wake up every morning and control your own schedule.",
    "quotes": [
      {
        "text": "Spending money to show people how much money you have is the fastest way to have less money. Wealth is what you don't see — the unpurchased cars, the unbought watches.",
        "page": "77",
        "loc": "Loc 810",
        "note": "Wealth is financial options, not trophies."
      },
      {
        "text": "The highest form of wealth is the ability to wake up every morning and say, 'I can do whatever I want today.'",
        "page": "83",
        "loc": "Loc 875",
        "note": "Time sovereignty over luxury."
      },
      {
        "text": "Having a gap between what could happen and what you need to happen in order to do well is what gives you endurance. Room for error is the only thing that lets you survive.",
        "page": "141",
        "loc": "Loc 1420",
        "note": "Room for error is king."
      }
    ],
    "stories": [
      {
        "title": "The Janitor vs The Wall Street Mogul",
        "summary": "Ronald Read was a quiet gas station attendant and janitor in rural Vermont who died with over $8 million in savings, having patiently compounded blue-chip stocks for decades. In contrast, Richard Fuscone was a Harvard-educated Merrill Lynch vice chairman who borrowed heavily for an 18,000-sq-ft mansion with eleven bathrooms. In the 2008 crash, his leverage crushed him into bankruptcy."
      }
    ],
    "topics": [
      {
        "name": "The Concept of 'Enough'",
        "takeaway": "Modern society is engineered to move the goalposts. Financial peace begins when you recognize that risking what you need for what you don't need is madness."
      },
      {
        "name": "Reasonable Over Rational",
        "takeaway": "Don't aim to be coldly rational on paper; aim to be emotionally reasonable so you can sleep soundly at night and stick with your plan through downturns."
      }
    ],
    "marginalia": {
      "note": "The real flex isn't a sportscar. It's having an unhurried, peaceful Tuesday morning sipping tea with a book, knowing your bills are covered.",
      "date": "Jul 21",
      "sticker": "☕"
    }
  },
  {
    "id": "klara-and-the-sun",
    "title": "Klara and the Sun",
    "author": "Kazuo Ishiguro",
    "year": "2021",
    "genreTags": ["Fiction", "Sci-Fi", "Humanity"],
    "rating": 5,
    "dateRead": "May 2026",
    "accentColor": "#8A5A2B",
    "coverSymbol": "☀️",
    "oneLiner": "Do you believe in the human heart? Something that makes each of us truly special and individual?",
    "whatILiked": "Ishiguro's gentle, heartbreaking restraint. Klara, a solar-powered Artificial Friend, observes human fragility, jealousy, and unconditional love with a purity that human characters have lost. It poses lingering philosophical questions about whether human beings are truly irreplaceable.",
    "quotes": [
      {
        "text": "The Sun always has ways to reach us. No matter how deep the shadows seem in the room, his nourishment finds a way through the glass.",
        "page": "112",
        "loc": "Loc 1140",
        "note": "Klara's innocent devotion."
      },
      {
        "text": "There was something very special, but it wasn't inside Josie. It was inside those who loved her. You cannot copy a person without copying the love that wraps around them.",
        "page": "294",
        "loc": "Loc 2880",
        "note": "The essence of human identity."
      }
    ],
    "stories": [
      {
        "title": "Klara's Journey to McBain's Barn",
        "summary": "Believing that the Sun rests every night inside the dark wooden beams of a distant farmer's barn, Klara sneaks across overgrown fields at twilight. She bargains with the Sun with pure devotion, offering her own solar fluid if he will only shed special nourishment to cure her ailing human companion, Josie."
      }
    ],
    "topics": [
      {
        "name": "The Mystery of the Human Heart",
        "takeaway": "Is a person just a complex set of habits and vocal cadences that can be replicated, or is human uniqueness held in the invisible relationships we share with others?"
      },
      {
        "name": "Unconditional Devotion",
        "takeaway": "Klara expects nothing in return for her fidelity. Her gentle acceptance of obsolescence once her duty is fulfilled is quietly devastating."
      }
    ],
    "marginalia": {
      "note": "Notice Ishiguro's visual framing: when Klara feels sensory or emotional overload, her field of vision breaks into compartmentalized geometric boxes.",
      "date": "May 09",
      "sticker": "🌾"
    }
  }
];

class SanctuaryApp {
  constructor() {
    this.books = [];
    this.currentView = 'shelf'; // 'shelf' | 'reader'
    this.currentBookId = null;
    this.activeTag = 'All';
    this.searchQuery = '';
    
    // Page Flip State for Active Book
    this.currentSpread = 0;
    this.bookSpreads = [];
    this.isPageTurning = false;

    // Theme & Preferences
    this.theme = localStorage.getItem('sanctuary_theme') || 'parchment';
    this.fontSizeIdx = parseInt(localStorage.getItem('sanctuary_font_idx') || '1', 10);
    this.fontSizes = ['0.95rem', '1.05rem', '1.18rem'];
    this.bookmarks = JSON.parse(localStorage.getItem('sanctuary_bookmarks') || '[]');
  }

  async init() {
    this.applyTheme(this.theme);
    this.applyFontSize(this.fontSizeIdx);
    await this.loadBooks();
    this.setupGlobalEvents();
    this.renderShelf();

    // Check URL anchor (e.g. #atomic-habits)
    const hash = window.location.hash.replace('#', '');
    if (hash && this.books.some(b => b.id === hash)) {
      this.openBook(hash);
    }
  }

  async loadBooks() {
    try {
      const res = await fetch('./data/books.json');
      if (res.ok) {
        this.books = await res.json();
      } else {
        this.books = DEFAULT_BOOKS;
      }
    } catch (e) {
      this.books = DEFAULT_BOOKS;
    }
  }

  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('sanctuary_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' 
        ? '<span class="icon">☀️</span> <span class="label">Warm Light</span>' 
        : '<span class="icon">🌙</span> <span class="label">Kindle Dark</span>';
    }
  }

  applyFontSize(idx) {
    this.fontSizeIdx = Math.max(0, Math.min(idx, this.fontSizes.length - 1));
    localStorage.setItem('sanctuary_font_idx', this.fontSizeIdx.toString());
    document.documentElement.style.setProperty('--reader-font-size', this.fontSizes[this.fontSizeIdx]);
  }

  setupGlobalEvents() {
    // Header brand button -> Shelf
    document.getElementById('brand-btn')?.addEventListener('click', () => this.showShelf());
    document.getElementById('breadcrumb-back-btn')?.addEventListener('click', () => this.showShelf());

    // Theme toggle
    document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
      this.applyTheme(this.theme === 'parchment' ? 'dark' : 'parchment');
    });

    // Font size controls
    document.getElementById('font-decrease-btn')?.addEventListener('click', () => this.applyFontSize(this.fontSizeIdx - 1));
    document.getElementById('font-increase-btn')?.addEventListener('click', () => this.applyFontSize(this.fontSizeIdx + 1));

    // Sound toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn && window.pageSoundFX) {
      const updateSoundUI = () => {
        const on = window.pageSoundFX.isSoundOn();
        soundBtn.innerHTML = on 
          ? '<span class="icon">🔊</span> <span class="label">Sound On</span>' 
          : '<span class="icon">🔇</span> <span class="label">Muted</span>';
      };
      updateSoundUI();
      soundBtn.addEventListener('click', () => {
        window.pageSoundFX.toggleSound();
        updateSoundUI();
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape' && this.currentView === 'reader') {
        this.showShelf();
      } else if (this.currentView === 'reader') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          this.flipNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.flipPrev();
        }
      }
    });

    // Bookmark quick jump
    document.getElementById('header-bookmark-btn')?.addEventListener('click', () => {
      if (this.bookmarks.length > 0) {
        const lastId = this.bookmarks[this.bookmarks.length - 1];
        this.openBook(lastId);
        this.showToast('🔖 Jumped to bookmarked title!');
      } else {
        this.showToast('ℹ️ No bookmarks yet. Click the red ribbon in any book!');
      }
    });
  }

  showToast(msg) {
    let toast = document.getElementById('kindle-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'kindle-toast';
      toast.className = 'kindle-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2400);
  }

  /* ========================================================================
     BOOKSHELF VIEW (SINGLE CLOSED 3D BOOKS)
     ======================================================================== */
  renderShelf() {
    this.currentView = 'shelf';
    window.location.hash = '';

    document.getElementById('reader-breadcrumb').style.display = 'none';
    document.getElementById('font-size-control').style.display = 'none';

    const shelfContainer = document.getElementById('shelf-view-container');
    const readerContainer = document.getElementById('reader-view-container');
    shelfContainer.style.display = 'block';
    readerContainer.classList.remove('active');

    const totalQuotes = this.books.reduce((acc, b) => acc + (b.quotes ? b.quotes.length : 0), 0);
    const totalStories = this.books.reduce((acc, b) => acc + (b.stories ? b.stories.length : 0), 0);

    const allTags = new Set();
    this.books.forEach(b => b.genreTags?.forEach(t => allTags.add(t)));
    const tagsList = ['All', ...Array.from(allTags)];

    shelfContainer.innerHTML = `
      <div class="shelf-hero">
        <div class="shelf-title-area">
          <div>
            <h2 class="shelf-heading">Personal Library & Reading Notes</h2>
            <p class="shelf-subheading">A calm, modern reading sanctuary capturing lessons, quotes, and reflections.</p>
          </div>
          <div class="shelf-quick-stats">
            <div class="quick-stat-badge">
              <span class="stat-value">${this.books.length}</span>
              <span class="stat-label">Volumes</span>
            </div>
            <div class="quick-stat-badge">
              <span class="stat-value">${totalQuotes}</span>
              <span class="stat-label">Highlights</span>
            </div>
            <div class="quick-stat-badge">
              <span class="stat-value">${totalStories}</span>
              <span class="stat-label">Stories</span>
            </div>
          </div>
        </div>

        <div class="shelf-toolbar">
          <div class="shelf-search-box">
            <span class="shelf-search-icon">🔍</span>
            <input type="text" id="shelf-search-input" class="shelf-search-input" 
                   placeholder="Search by title, author, keyword, or quote..." 
                   value="${this.searchQuery}" />
          </div>
          <div class="shelf-tag-filters" id="shelf-tag-filters">
            ${tagsList.map(t => `
              <button class="shelf-tag-chip ${t === this.activeTag ? 'active' : ''}" data-tag="${t}">${t}</button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="books-grid" id="books-grid">
        <!-- Injected via filterBooks() -->
      </div>
    `;

    this.attachShelfListeners();
    this.filterBooks();
  }

  attachShelfListeners() {
    document.getElementById('shelf-search-input')?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.filterBooks();
    });

    const tagChips = document.querySelectorAll('.shelf-tag-chip');
    tagChips.forEach(chip => {
      chip.addEventListener('click', () => {
        tagChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeTag = chip.getAttribute('data-tag');
        this.filterBooks();
      });
    });
  }

  filterBooks() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;

    const filtered = this.books.filter(book => {
      const matchTag = this.activeTag === 'All' || book.genreTags?.includes(this.activeTag);
      const textToSearch = [
        book.title,
        book.author,
        book.oneLiner,
        book.whatILiked,
        ...(book.genreTags || []),
        ...(book.quotes || []).map(q => q.text)
      ].join(' ').toLowerCase();

      const matchSearch = !this.searchQuery || textToSearch.includes(this.searchQuery);
      return matchTag && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="shelf-empty-state">
          <div class="shelf-empty-icon">📖</div>
          <h3>No reading notes found</h3>
          <p>Try searching for a different keyword or select another genre tag.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(book => {
      const isBookmarked = this.bookmarks.includes(book.id);
      const stars = '★'.repeat(book.rating || 5);
      const quotesCount = book.quotes ? book.quotes.length : 0;
      const storiesCount = book.stories ? book.stories.length : 0;

      return `
        <div class="closed-book-card" data-book-id="${book.id}">
          <div class="book-cover-mockup" style="--accent-color: ${book.accentColor || '#2c3e50'};">
            <div class="cover-top-row">
              <span class="cover-symbol-badge">${book.coverSymbol || '📖'}</span>
              <span class="cover-genre-tag">${(book.genreTags && book.genreTags[0]) || 'Book'}</span>
            </div>
            <div class="cover-center-content">
              <h3 class="cover-book-title">${book.title}</h3>
              <p class="cover-book-author">by ${book.author}</p>
            </div>
            <div class="cover-bottom-row">
              <span class="cover-reading-date">${book.dateRead || book.year}</span>
              <span class="cover-stars">${stars}</span>
            </div>
          </div>

          <div class="book-card-details">
            <p class="book-card-quote">“${book.oneLiner}”</p>
            <div class="book-meta-footer">
              <span class="book-counts-pill">${quotesCount} quotes • ${storiesCount} stories</span>
              <span class="btn-open-notes">
                ${isBookmarked ? '★ Bookmarked • ' : ''}Open Book 📖 →
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.closed-book-card').forEach(card => {
      card.addEventListener('click', () => {
        this.openBook(card.getAttribute('data-book-id'));
      });
    });
  }

  showShelf() {
    this.renderShelf();
  }

  /* ========================================================================
     AUTHENTIC 3D PAGE-FLIP BOOK READER
     ======================================================================== */
  openBook(bookId) {
    const book = this.books.find(b => b.id === bookId);
    if (!book) return;

    this.currentView = 'reader';
    this.currentBookId = bookId;
    this.currentSpread = 0;
    window.location.hash = bookId;

    if (window.pageSoundFX) {
      window.pageSoundFX.playTurnSound();
    }

    // Header updates
    const breadcrumb = document.getElementById('reader-breadcrumb');
    breadcrumb.style.display = 'flex';
    document.getElementById('breadcrumb-book-title').textContent = book.title;
    document.getElementById('font-size-control').style.display = 'flex';

    document.getElementById('shelf-view-container').style.display = 'none';
    const readerContainer = document.getElementById('reader-view-container');
    readerContainer.classList.add('active');

    // Build the spreads for this specific book
    this.buildBookSpreads(book);
    this.renderBookReader(book);
  }

  buildBookSpreads(book) {
    const stars = '★'.repeat(book.rating || 5);
    const tagsHtml = (book.genreTags || []).map(t => `<span class="reader-tag">#${t}</span>`).join('');

    // Topics HTML
    const topicsHtml = (book.topics || []).map(tp => `
      <div class="reader-topic-card">
        <h5 class="reader-topic-name">${tp.name}</h5>
        <p class="reader-topic-takeaway">${tp.takeaway}</p>
      </div>
    `).join('');

    // First Highlight for Spread 1
    const firstQuote = book.quotes && book.quotes[0] ? `
      <div class="kindle-highlight-card" style="margin-top: 14px;">
        <p class="kindle-highlight-text">“${book.quotes[0].text}”</p>
        <div class="kindle-highlight-footer">
          <span class="kindle-loc">Key Highlight • ${book.quotes[0].loc || `p. ${book.quotes[0].page}`}</span>
          ${book.quotes[0].note ? `<span class="kindle-note">${book.quotes[0].note}</span>` : ''}
        </div>
      </div>
    ` : '';

    // Highlights for Spread 2
    const remainingQuotesHtml = (book.quotes || []).slice(1).map(q => `
      <div class="kindle-highlight-card">
        <p class="kindle-highlight-text">“${q.text}”</p>
        <div class="kindle-highlight-footer">
          <span class="kindle-loc">Highlight • ${q.loc || `p. ${q.page}`}</span>
          ${q.note ? `<span class="kindle-note">${q.note}</span>` : ''}
        </div>
      </div>
    `).join('');

    // Stories HTML
    const storiesHtml = (book.stories || []).map(s => `
      <div class="reader-story-box">
        <h4 class="reader-story-title"><span>🪶</span> ${s.title}</h4>
        <p class="reader-story-summary">${s.summary}</p>
      </div>
    `).join('');

    const marg = book.marginalia;

    // SPREAD 1: Overview & What I Liked (Left) + Core Concepts (Right)
    const spread1Left = `
      <div class="page-inner-content">
        <div class="page-folio-header">
          <span>${book.author.toUpperCase()}</span>
          <span>${book.dateRead || book.year}</span>
        </div>

        <div class="reader-book-identity">
          <div class="reader-mini-cover" style="--accent-color: ${book.accentColor || '#2c3e50'};">
            <span>${book.coverSymbol || '📖'}</span>
          </div>
          <div class="reader-identity-meta">
            <div class="reader-tags-row">${tagsHtml}</div>
            <h2 class="reader-book-title">${book.title}</h2>
            <div class="reader-author-line">
              <span>by ${book.author}</span>
              <span class="reader-stars">${stars}</span>
            </div>
          </div>
        </div>

        <div class="reader-oneliner-box">
          <p class="reader-oneliner-text">“${book.oneLiner}”</p>
        </div>

        <div class="reader-section">
          <div class="reader-section-header">
            <span class="reader-section-icon">❦</span>
            <h4 class="reader-section-title">The Core Spark (What I Liked)</h4>
          </div>
          <div class="reader-reflection-body">
            <p>${book.whatILiked}</p>
          </div>
        </div>

        <div class="page-folio-footer">
          <span>Spread 1 of 2</span>
          <span>p. 1</span>
        </div>
      </div>
    `;

    const spread1Right = `
      <div class="page-inner-content">
        <div class="page-folio-header">
          <span>${book.title.toUpperCase()}</span>
          <span>CONCEPTS & MODELS</span>
        </div>

        <div class="reader-section">
          <div class="reader-section-header">
            <span class="reader-section-icon">◈</span>
            <h4 class="reader-section-title">Core Mental Frameworks</h4>
          </div>
          <div class="reader-topics-list">
            ${topicsHtml}
          </div>
        </div>

        ${firstQuote}

        <div class="page-folio-footer">
          <span class="page-turn-hint-link" id="hint-flip-next">Flip page for Quotes & Stories →</span>
          <span>p. 2</span>
        </div>
      </div>
    `;

    // SPREAD 2: Highlights/Quotes (Left) + Stories & Marginalia (Right)
    const spread2Left = `
      <div class="page-inner-content">
        <div class="page-folio-header">
          <span>${book.title.toUpperCase()}</span>
          <span>STANDOUT HIGHLIGHTS</span>
        </div>

        <div class="reader-section">
          <div class="reader-section-header">
            <span class="reader-section-icon">❝</span>
            <h4 class="reader-section-title">Kindle Highlights & Passages</h4>
          </div>
          <div class="kindle-highlights-list">
            ${remainingQuotesHtml || firstQuote}
          </div>
        </div>

        <div class="page-folio-footer">
          <span class="page-turn-hint-link" id="hint-flip-prev">← Flip back to Concepts</span>
          <span>p. 3</span>
        </div>
      </div>
    `;

    const spread2Right = `
      <div class="page-inner-content">
        <div class="page-folio-header">
          <span>${book.title.toUpperCase()}</span>
          <span>STORIES & MARGINALIA</span>
        </div>

        ${storiesHtml ? `
        <div class="reader-section">
          <div class="reader-section-header">
            <span class="reader-section-icon">🕮</span>
            <h4 class="reader-section-title">Stories & Parables</h4>
          </div>
          ${storiesHtml}
        </div>
        ` : ''}

        ${marg ? `
        <div class="modern-marginalia-card">
          <div class="marginalia-pin-badge">${marg.sticker || '📌'}</div>
          <p class="marginalia-handwritten-note">${marg.note}</p>
          <div class="marginalia-footer">
            <span>${marg.date || ''} • Personal Marginalia</span>
          </div>
        </div>
        ` : ''}

        <div class="page-folio-footer">
          <span>End of Notes</span>
          <span>p. 4</span>
        </div>
      </div>
    `;

    this.bookSpreads = [
      { spreadIdx: 0, leftHtml: spread1Left, rightHtml: spread1Right, label: 'Overview & Frameworks' },
      { spreadIdx: 1, leftHtml: spread2Left, rightHtml: spread2Right, label: 'Quotes, Stories & Marginalia' }
    ];
  }

  renderBookReader(book) {
    const readerContainer = document.getElementById('reader-view-container');
    const isBookmarked = this.bookmarks.includes(book.id);
    const bookIdx = this.books.findIndex(b => b.id === book.id);
    const currentSpreadData = this.bookSpreads[this.currentSpread];

    readerContainer.innerHTML = `
      <!-- Top Reader Sub-bar -->
      <div class="reader-subbar">
        <button class="subbar-btn" id="reader-back-shelf-btn">
          <span>← Back to Bookshelf</span>
        </button>
        <div class="subbar-right-tools">
          <span class="spread-tag-badge" id="current-spread-badge">${currentSpreadData.label}</span>
          <button class="subbar-btn ${isBookmarked ? 'bookmarked' : ''}" id="reader-bookmark-toggle">
            <span>${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</span>
          </button>
        </div>
      </div>

      <!-- 3D Book Stage with Authentic Page Flip -->
      <div class="book-stage" id="book-stage">
        <div class="book-casing" id="book-casing">
          <!-- Center Spine Crease -->
          <div class="book-spine-gutter"></div>

          <!-- Hanging Silk Ribbon Bookmark -->
          <div class="ribbon-bookmark-drape ${isBookmarked ? 'active' : ''}" id="ribbon-drape" title="Click to bookmark this book">
            <div class="ribbon-tail-notch"></div>
          </div>

          <!-- Left Page Panel -->
          <div class="book-panel panel-left" id="panel-left">
            ${currentSpreadData.leftHtml}
            <div class="page-turn-trigger trigger-prev" id="edge-trigger-prev" title="Flip page backward (← Arrow)"></div>
          </div>

          <!-- Right Page Panel -->
          <div class="book-panel panel-right" id="panel-right">
            ${currentSpreadData.rightHtml}
            <div class="page-turn-trigger trigger-next" id="edge-trigger-next" title="Flip page forward (→ Arrow or Click Corner)">
              <div class="corner-peel-hint" title="Turn page"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Page Flip Dock -->
      <nav class="reader-page-dock" aria-label="Page Controls">
        <div class="dock-page-controls">
          <button class="dock-flip-btn" id="btn-flip-prev" ${this.currentSpread === 0 ? 'disabled' : ''}>
            <span>← Flip Back</span>
          </button>

          <div class="spread-dots-indicator">
            ${this.bookSpreads.map((_, i) => `
              <div class="spread-dot ${i === this.currentSpread ? 'active' : ''}"></div>
            `).join('')}
          </div>

          <button class="dock-flip-btn" id="btn-flip-next" ${this.currentSpread === this.bookSpreads.length - 1 ? 'disabled' : ''}>
            <span>Flip Page →</span>
          </button>

          <span class="dock-spread-label" id="dock-spread-label">Spread ${this.currentSpread + 1} of ${this.bookSpreads.length}</span>
        </div>

        <div class="dock-book-jumper">
          <button class="dock-jump-btn" id="dock-prev-book" ${bookIdx === 0 ? 'disabled' : ''}>
            ← Prev Book
          </button>
          <span style="font-size: 0.76rem; color: var(--text-tertiary);">Volume ${bookIdx + 1} of ${this.books.length}</span>
          <button class="dock-jump-btn" id="dock-next-book" ${bookIdx === this.books.length - 1 ? 'disabled' : ''}>
            Next Book →
          </button>
        </div>
      </nav>
    `;

    this.attachPageFlipEvents(book, bookIdx);
  }

  attachPageFlipEvents(book, bookIdx) {
    // Back to shelf
    document.getElementById('reader-back-shelf-btn')?.addEventListener('click', () => this.showShelf());

    // Ribbon bookmark toggle
    const handleBookmark = () => {
      const idx = this.bookmarks.indexOf(book.id);
      const ribbon = document.getElementById('ribbon-drape');
      const btn = document.getElementById('reader-bookmark-toggle');

      if (idx !== -1) {
        this.bookmarks.splice(idx, 1);
        ribbon?.classList.remove('active');
        if (btn) btn.innerHTML = '<span>☆ Bookmark</span>';
        this.showToast('Bookmark removed');
      } else {
        this.bookmarks.push(book.id);
        ribbon?.classList.add('active');
        if (btn) btn.innerHTML = '<span>★ Bookmarked</span>';
        this.showToast('🔖 Ribbon Bookmark placed on this volume!');
      }
      localStorage.setItem('sanctuary_bookmarks', JSON.stringify(this.bookmarks));
    };

    document.getElementById('reader-bookmark-toggle')?.addEventListener('click', handleBookmark);
    document.getElementById('ribbon-drape')?.addEventListener('click', handleBookmark);

    // Page turn triggers (Edge click + Curled Corner click)
    document.getElementById('edge-trigger-next')?.addEventListener('click', () => this.flipNext());
    document.getElementById('edge-trigger-prev')?.addEventListener('click', () => this.flipPrev());
    document.getElementById('hint-flip-next')?.addEventListener('click', () => this.flipNext());
    document.getElementById('hint-flip-prev')?.addEventListener('click', () => this.flipPrev());

    // Dock buttons
    document.getElementById('btn-flip-next')?.addEventListener('click', () => this.flipNext());
    document.getElementById('btn-flip-prev')?.addEventListener('click', () => this.flipPrev());

    // Book jumps
    document.getElementById('dock-prev-book')?.addEventListener('click', () => {
      if (bookIdx > 0) this.openBook(this.books[bookIdx - 1].id);
    });
    document.getElementById('dock-next-book')?.addEventListener('click', () => {
      if (bookIdx < this.books.length - 1) this.openBook(this.books[bookIdx + 1].id);
    });
  }

  /* ========================================================================
     AUTHENTIC 3D PAGE-FLIP ENGINE (ANIMATING THE PAGE PEEL)
     ======================================================================== */
  flipNext() {
    if (this.isPageTurning) return;
    if (this.currentSpread >= this.bookSpreads.length - 1) {
      // If at last spread, jump to next book if available
      const idx = this.books.findIndex(b => b.id === this.currentBookId);
      if (idx < this.books.length - 1) {
        this.openBook(this.books[idx + 1].id);
      }
      return;
    }

    this.isPageTurning = true;
    if (window.pageSoundFX) {
      window.pageSoundFX.playTurnSound();
    }

    const bookCasing = document.getElementById('book-casing');
    const currentSpreadData = this.bookSpreads[this.currentSpread];
    const nextSpreadData = this.bookSpreads[this.currentSpread + 1];

    // Create 3D Turning Leaf that rotates from Right to Left
    const turningLeaf = document.createElement('div');
    turningLeaf.className = 'turning-leaf leaf-turn-forward';
    turningLeaf.innerHTML = `
      <div class="leaf-face leaf-face-front">${currentSpreadData.rightHtml}</div>
      <div class="leaf-face leaf-face-back">${nextSpreadData.leftHtml}</div>
      <div class="leaf-shadow-layer"></div>
    `;

    bookCasing.appendChild(turningLeaf);

    // Swap underlying right panel immediately to target spread's right content
    const panelRight = document.getElementById('panel-right');
    if (panelRight) {
      panelRight.innerHTML = `
        ${nextSpreadData.rightHtml}
        <div class="page-turn-trigger trigger-next" id="edge-trigger-next" title="Flip page forward">
          <div class="corner-peel-hint" title="Turn page"></div>
        </div>
      `;
    }

    setTimeout(() => {
      this.currentSpread += 1;
      const panelLeft = document.getElementById('panel-left');
      if (panelLeft) {
        panelLeft.innerHTML = `
          ${nextSpreadData.leftHtml}
          <div class="page-turn-trigger trigger-prev" id="edge-trigger-prev" title="Flip page backward"></div>
        `;
      }
      turningLeaf.remove();
      this.isPageTurning = false;
      this.updateDockState();
      this.rebindPageTriggers();
    }, 600);
  }

  flipPrev() {
    if (this.isPageTurning) return;
    if (this.currentSpread <= 0) {
      // If at first spread, jump to prev book if available
      const idx = this.books.findIndex(b => b.id === this.currentBookId);
      if (idx > 0) {
        this.openBook(this.books[idx - 1].id);
      }
      return;
    }

    this.isPageTurning = true;
    if (window.pageSoundFX) {
      window.pageSoundFX.playTurnSound();
    }

    const bookCasing = document.getElementById('book-casing');
    const currentSpreadData = this.bookSpreads[this.currentSpread];
    const prevSpreadData = this.bookSpreads[this.currentSpread - 1];

    // Create 3D Turning Leaf that rotates from Left to Right
    const turningLeaf = document.createElement('div');
    turningLeaf.className = 'turning-leaf leaf-turn-backward';
    turningLeaf.innerHTML = `
      <div class="leaf-face leaf-face-front">${currentSpreadData.leftHtml}</div>
      <div class="leaf-face leaf-face-back">${prevSpreadData.rightHtml}</div>
      <div class="leaf-shadow-layer"></div>
    `;

    bookCasing.appendChild(turningLeaf);

    // Swap underlying left panel immediately to target spread's left content
    const panelLeft = document.getElementById('panel-left');
    if (panelLeft) {
      panelLeft.innerHTML = `
        ${prevSpreadData.leftHtml}
        <div class="page-turn-trigger trigger-prev" id="edge-trigger-prev" title="Flip page backward"></div>
      `;
    }

    setTimeout(() => {
      this.currentSpread -= 1;
      const panelRight = document.getElementById('panel-right');
      if (panelRight) {
        panelRight.innerHTML = `
          ${prevSpreadData.rightHtml}
          <div class="page-turn-trigger trigger-next" id="edge-trigger-next" title="Flip page forward">
            <div class="corner-peel-hint" title="Turn page"></div>
          </div>
        `;
      }
      turningLeaf.remove();
      this.isPageTurning = false;
      this.updateDockState();
      this.rebindPageTriggers();
    }, 600);
  }

  updateDockState() {
    const currentSpreadData = this.bookSpreads[this.currentSpread];
    const badge = document.getElementById('current-spread-badge');
    if (badge) badge.textContent = currentSpreadData.label;

    const label = document.getElementById('dock-spread-label');
    if (label) label.textContent = `Spread ${this.currentSpread + 1} of ${this.bookSpreads.length}`;

    const prevBtn = document.getElementById('btn-flip-prev');
    const nextBtn = document.getElementById('btn-flip-next');
    if (prevBtn) prevBtn.disabled = this.currentSpread === 0;
    if (nextBtn) nextBtn.disabled = this.currentSpread === this.bookSpreads.length - 1;

    // Dots
    const dots = document.querySelectorAll('.spread-dot');
    dots.forEach((dot, i) => {
      if (i === this.currentSpread) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  rebindPageTriggers() {
    document.getElementById('edge-trigger-next')?.addEventListener('click', () => this.flipNext());
    document.getElementById('edge-trigger-prev')?.addEventListener('click', () => this.flipPrev());
    document.getElementById('hint-flip-next')?.addEventListener('click', () => this.flipNext());
    document.getElementById('hint-flip-prev')?.addEventListener('click', () => this.flipPrev());
  }
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.sanctuaryApp = new SanctuaryApp();
  window.sanctuaryApp.init();
});
