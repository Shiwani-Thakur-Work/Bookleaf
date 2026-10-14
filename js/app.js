/**
 * Main Application Controller for The Reading Sanctuary
 * Loads books, initializes the page flip engine, sets up toolbar controls,
 * TOC search/filters, bookmark memory, and theme toggling.
 */

// Fallback books data in case opened via file:// protocol without local HTTP server
const FALLBACK_BOOKS = [
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "author": "James Clear",
    "year": "2018",
    "genreTags": ["Habits", "Psychology", "Personal Growth"],
    "rating": 5,
    "dateRead": "September 2026",
    "accentColor": "#A45A2A",
    "coverSymbol": "⚡",
    "oneLiner": "You do not rise to the level of your goals. You fall to the level of your systems.",
    "whatILiked": "The most empowering book on human behavior I have encountered. Clear dismantles the myth that massive success requires monumental willpower. Instead, he treats identity as a daily vote. The concept that every small choice casts a ballot for who you want to become completely shifted how I view my mornings and evening routines.",
    "quotes": [
      {
        "text": "Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity.",
        "page": "38",
        "note": "Identity-first, outcome-second."
      },
      {
        "text": "You do not rise to the level of your goals. You fall to the level of your systems. Your goal is your desired outcome; your system is the collection of daily habits that will get you there.",
        "page": "27",
        "note": "Systems outlast fleeting motivation."
      },
      {
        "text": "Be the designer of your world and not merely the consumer of it. Never depend on self-control when environment design can remove the friction.",
        "page": "86",
        "note": "Visual cues dictate behavior."
      }
    ],
    "stories": [
      {
        "title": "The British Cycling Renaissance",
        "summary": "For nearly a century, British cyclists won almost nothing. In 2003, performance director Dave Brailsford broke down everything about riding a bike and looked for 1% improvements. They redesigned seats for comfort, rubbed alcohol on tires for grip, tested fabrics in wind tunnels, and even carried each rider's personal pillow to hotels for optimal sleep. Within 5 years, they dominated the Beijing Olympics and won 5 Tour de France titles."
      }
    ],
    "topics": [
      {
        "name": "The 4 Laws of Behavior Change",
        "takeaway": "To build a habit: Make it obvious (cue), Make it attractive (craving), Make it easy (response), Make it satisfying (reward). Invert these 4 to break bad habits."
      },
      {
        "name": "The Two-Minute Rule",
        "takeaway": "When starting a new habit, scale it down until it takes less than two minutes. 'Read before bed' becomes 'Read one page'. Standardize before you optimize."
      }
    ],
    "marginalia": {
      "note": "Action item: Keep my current physical book on my pillow every morning. When I go to sleep, opening it has zero friction!",
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
    "accentColor": "#243D54",
    "coverSymbol": "🏛️",
    "oneLiner": "You have power over your mind — not outside events. Realize this, and you will find strength.",
    "whatILiked": "Reading this feels like eavesdropping on the private soul of the most powerful man in the ancient world. Marcus never intended these pages to be published; they were private self-admonitions written in military campaign tents. His humility, relentless self-honesty, and acceptance of mortality are profoundly grounding in an age of noise.",
    "quotes": [
      {
        "text": "The soul becomes dyed with the color of its thoughts. If you dwell on petty grievances, your spirit grows small. Dwell on virtue, and your mind stays expansive.",
        "page": "Book V, 16",
        "note": "Curate what you allow your mind to linger on."
      },
      {
        "text": "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love. Meet the day not with dread, but as a temporary gift.",
        "page": "Book II, 1",
        "note": "Morning orientation."
      },
      {
        "text": "Waste no more time arguing about what a good man should be. Be one.",
        "page": "Book X, 16",
        "note": "Action over debate."
      }
    ],
    "stories": [
      {
        "title": "Journaling on the Frozen Danube",
        "summary": "During the Marcomannic Wars, while battling brutal winter storms and the Antonine Plague that decimated Rome, Marcus Aurelius sat in his military tent along the frozen Danube river. Rather than lamenting his fate or seeking revenge against political betrayals, he used his journal to remind himself to remain calm, treat difficult people with empathy, and accept nature's seasons without anger."
      }
    ],
    "topics": [
      {
        "name": "The Dichotomy of Control",
        "takeaway": "Distinguish ruthlessly between things within your power (opinions, intentions, actions) and things outside it (reputation, weather, outcomes). Invest zero anxiety in the latter."
      },
      {
        "name": "The View from Above",
        "takeaway": "Zoom out mentally until cities and continents look like specks of dust. Looking at the sheer scale of cosmos reduces immediate anxieties into their harmless proportion."
      }
    ],
    "marginalia": {
      "note": "Whenever someone is rude online or in traffic: Remember they are acting out of blindness to what is truly good. They cannot stain my character unless I react in kind.",
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
    "accentColor": "#1E4738",
    "coverSymbol": "⏳",
    "oneLiner": "Doing well with money has a little to do with how smart you are and a lot to do with how you behave.",
    "whatILiked": "Not a single boring spreadsheet or stock formula in sight. Housel treats money as a study of human psychology: ego, envy, fear, and freedom. The chapter on 'Freedom' resonated deeply — that wealth's greatest dividend is not shiny toys, but the ability to control your own schedule.",
    "quotes": [
      {
        "text": "Spending money to show people how much money you have is the fastest way to have less money. Wealth is what you don't see — the unpurchased cars, the unbought watches.",
        "page": "77",
        "note": "Wealth is financial options, not trophies."
      },
      {
        "text": "The highest form of wealth is the ability to wake up every morning and say, 'I can do whatever I want today.'",
        "page": "83",
        "note": "Time sovereignty over luxury."
      },
      {
        "text": "Having a gap between what could happen and what you need to happen in order to do well is what gives you endurance. Room for error is the only thing that lets you survive.",
        "page": "141",
        "note": "Room for error is king."
      }
    ],
    "stories": [
      {
        "title": "The Janitor vs The Wall Street Mogul",
        "summary": "Ronald Read was a gas station attendant and janitor in rural Vermont who died with over $8 million in savings, having quietly compounded blue-chip dividend stocks for decades. In stark contrast, Richard Fuscone was a Harvard-educated Merrill Lynch vice chairman who borrowed heavily to build an 18,000-sq-ft mansion with two pools and eleven bathrooms. In the 2008 crash, his leverage crushed him into bankruptcy."
      }
    ],
    "topics": [
      {
        "name": "The Concept of 'Enough'",
        "takeaway": "Modern society is engineered to move the goalposts. True financial peace starts when you recognize that risking what you have and need for what you don't have and don't need is madness."
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
    "accentColor": "#865824",
    "coverSymbol": "☀️",
    "oneLiner": "Do you believe in the human heart? Something that makes each of us truly special and individual?",
    "whatILiked": "Ishiguro's gentle, heartbreaking restraint. Klara, a solar-powered Artificial Friend, observes human fragility, jealousy, and unconditional love with a purity that human characters have lost. It poses lingering philosophical questions about whether human beings are truly irreplaceable.",
    "quotes": [
      {
        "text": "The Sun always has ways to reach us. No matter how deep the shadows seem in the room, his nourishment finds a way through the glass.",
        "page": "112",
        "note": "Klara's innocent devotion."
      },
      {
        "text": "There was something very special, but it wasn't inside Josie. It was inside those who loved her. You cannot copy a person without copying the love that wraps around them.",
        "page": "294",
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
        "takeaway": "Is a person just a complex set of habits, mannerisms, and vocal cadences that can be replicated, or is human uniqueness held in the invisible relationships we share with others?"
      },
      {
        "name": "Unconditional Devotion",
        "takeaway": "Klara expects nothing in return for her fidelity. Her gentle acceptance of obsolescence once her duty is fulfilled is quietly devastating."
      }
    ],
    "marginalia": {
      "note": "Pay attention to Ishiguro's visual framing: when Klara feels sensory or emotional overload, her field of vision breaks into compartmentalized geometric boxes.",
      "date": "May 09",
      "sticker": "🌾"
    }
  }
];

class ReadingJournalApp {
  constructor() {
    this.books = [];
    this.engine = null;
    this.theme = localStorage.getItem('reading_journal_theme') || 'parchment';
  }

  async init() {
    this.applyTheme(this.theme);
    await this.loadBooksData();
    this.buildSpreads();
    this.setupToolbar();
    this.setupTocListeners();
  }

  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('reading_journal_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'midnight' 
        ? '<span class="icon">☀️</span> <span class="label">Parchment</span>' 
        : '<span class="icon">🌙</span> <span class="label">Midnight</span>';
    }
  }

  async loadBooksData() {
    try {
      const res = await fetch('./data/books.json');
      if (res.ok) {
        this.books = await res.json();
      } else {
        this.books = FALLBACK_BOOKS;
      }
    } catch (e) {
      // Local file or offline fallback
      this.books = FALLBACK_BOOKS;
    }
  }

  buildSpreads() {
    const spreads = [];

    // Spread 0: Front Cover
    spreads.push({
      type: 'cover',
      title: 'Front Cover',
      leftHtml: '',
      rightHtml: Templates.frontCover()
    });

    // Spread 1: Ex Libris (Left) & Table of Contents (Right)
    spreads.push({
      type: 'spread',
      title: 'Table of Contents',
      leftHtml: Templates.bookplatePage(this.books),
      rightHtml: Templates.tableOfContentsPage(this.books)
    });

    // Spreads 2..N: Individual Books
    this.books.forEach((book, idx) => {
      const leftPageNum = (idx + 1) * 2 + 1;
      const rightPageNum = leftPageNum + 1;
      spreads.push({
        type: 'spread',
        title: `${book.title}`,
        bookId: book.id,
        leftHtml: Templates.bookSpreadLeft(book, leftPageNum),
        rightHtml: Templates.bookSpreadRight(book, rightPageNum)
      });
    });

    // Final Content Spread: Epilogue & How to Add Guide
    spreads.push({
      type: 'spread',
      title: 'Epilogue & Maintenance',
      leftHtml: Templates.epiloguePage(this.books),
      rightHtml: Templates.howToAddPage()
    });

    // Back Cover
    spreads.push({
      type: 'back',
      title: 'Back Cover',
      leftHtml: Templates.backCover(),
      rightHtml: ''
    });

    // Initialize the Flip Engine
    this.engine = new PageFlipEngine({
      container: document.getElementById('book-container'),
      onSpreadChange: (currIdx, total) => this.updateUiState(currIdx, total)
    });

    this.engine.setSpreads(spreads);
  }

  updateUiState(currIdx, total) {
    const spread = this.engine.spreads[currIdx];
    const indicator = document.getElementById('spread-indicator');
    if (indicator) {
      if (spread.type === 'cover') {
        indicator.textContent = 'Cover';
      } else if (spread.type === 'back') {
        indicator.textContent = 'Back Cover';
      } else if (currIdx === 1) {
        indicator.textContent = 'Contents & Index';
      } else {
        indicator.textContent = `${spread.title} (${currIdx} of ${total - 2})`;
      }
    }

    // Prev / Next button states
    const prevBtn = document.getElementById('btn-prev-page');
    const nextBtn = document.getElementById('btn-next-page');
    if (prevBtn) prevBtn.disabled = currIdx <= 0;
    if (nextBtn) nextBtn.disabled = currIdx >= total - 1;

    // Check ribbon status for current spread
    const ribbon = document.getElementById('bookmark-ribbon');
    if (ribbon) {
      const saved = localStorage.getItem('reading_journal_bookmark');
      if (saved !== null && parseInt(saved, 10) === currIdx) {
        ribbon.classList.add('bookmarked');
      } else {
        ribbon.classList.remove('bookmarked');
      }
    }

    // Refresh TOC listeners whenever TOC page is displayed
    if (currIdx === 1) {
      setTimeout(() => this.setupTocListeners(), 50);
    }
  }

  setupToolbar() {
    // Prev / Next Buttons
    const prevBtn = document.getElementById('btn-prev-page');
    const nextBtn = document.getElementById('btn-next-page');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.engine.prevPage());
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.engine.nextPage());
    }

    // Table of contents quick button
    const tocBtn = document.getElementById('btn-jump-toc');
    if (tocBtn) {
      tocBtn.addEventListener('click', () => {
        this.engine.goToSpread(1);
      });
    }

    // Jump to saved bookmark
    const jumpBookmarkBtn = document.getElementById('btn-jump-bookmark');
    if (jumpBookmarkBtn) {
      jumpBookmarkBtn.addEventListener('click', () => {
        const saved = localStorage.getItem('reading_journal_bookmark');
        if (saved !== null) {
          const idx = parseInt(saved, 10);
          if (idx >= 0 && idx < this.engine.spreads.length) {
            this.engine.goToSpread(idx);
            this.engine.showToast('📖 Jumped to your bookmarked page!');
          }
        } else {
          this.engine.showToast('ℹ️ No bookmark saved yet. Click the red ribbon on any page!');
        }
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const nextTheme = this.theme === 'parchment' ? 'midnight' : 'parchment';
        this.applyTheme(nextTheme);
      });
    }

    // Sound Toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn && window.pageSoundFX) {
      const updateSoundIcon = () => {
        const on = window.pageSoundFX.isSoundOn();
        soundBtn.innerHTML = on 
          ? '<span class="icon">🔊</span> <span class="label">Sound On</span>' 
          : '<span class="icon">🔇</span> <span class="label">Muted</span>';
      };
      updateSoundIcon();

      soundBtn.addEventListener('click', () => {
        window.pageSoundFX.toggleSound();
        updateSoundIcon();
      });
    }
  }

  setupTocListeners() {
    // Jump to book on TOC item click
    const tocItems = document.querySelectorAll('.toc-item');
    tocItems.forEach(item => {
      item.onclick = () => {
        const targetSpread = parseInt(item.getAttribute('data-spread'), 10);
        if (!isNaN(targetSpread)) {
          this.engine.goToSpread(targetSpread);
        }
      };
    });

    // Tag filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
      chip.onclick = (e) => {
        e.stopPropagation();
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.getAttribute('data-filter');
        this.filterTocList(filter, document.getElementById('toc-search-input')?.value || '');
      };
    });

    // Search input
    const searchInput = document.getElementById('toc-search-input');
    if (searchInput) {
      searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase().trim();
        const activeChip = document.querySelector('.filter-chip.active');
        const activeFilter = activeChip ? activeChip.getAttribute('data-filter') : 'All';
        this.filterTocList(activeFilter, query);
      };
    }
  }

  filterTocList(tag, query) {
    const items = document.querySelectorAll('.toc-item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const tags = (item.getAttribute('data-tags') || '').toLowerCase();
      const matchesTag = tag === 'All' || tags.includes(tag.toLowerCase());
      const matchesQuery = !query || text.includes(query) || tags.includes(query);

      if (matchesTag && matchesQuery) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.readingApp = new ReadingJournalApp();
  window.readingApp.init();
});
