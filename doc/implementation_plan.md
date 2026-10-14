# 🛠️ Digital Reading Journal — Implementation Plan

> **Deployment Principle**: **100% Native GitHub Pages Direct Deployment**.
> Zero 3rd-party tools, zero build dependencies, and zero complex setups. Simply push the repository to GitHub, enable GitHub Pages in repo settings, and the site is live instantly.

---

## 🎯 Architecture & Technical Guidelines

### 1. Technology: Pure Vanilla Web Stack (HTML5 + CSS3 + Modern JavaScript)
- **Zero Build Step**: No Node.js compilation, npm build, or bundlers required.
- **Direct GitHub Pages Hosting**:
  - `index.html` sits at the repository root.
  - All assets, scripts, data, and styles use **strict relative paths** (`./css/`, `./js/`, `./data/`) so it works out-of-the-box whether hosted at root domain or a GitHub project subpath (`username.github.io/ReadingNotes/`).
- **Data Persistence & Updates**:
  - All book notes, reflections, quotes, and marginalia are stored in a clean, human-editable `./data/books.json` file.
  - Adding a book takes under 2 minutes by adding a JSON record and committing to GitHub.
- **Local Progress**:
  - Last read page and theme preferences are saved in `localStorage`.

### 2. Physical Book Aesthetics & Page-Flip Engine
- **Visuals**:
  - Luxurious vintage hardcover casing with leather/cloth grain and embossed gold typography.
  - Center spine gutter with realistic lighting/crease depth shadow.
  - Creamy parchment paper pages (`#FAF7F0`) with subtle paper grain and deckle edges.
  - Hanging silk crimson bookmark ribbon (`#8B1E1E`) with gold fringe.
  - Authentic typography: *Cinzel* & *Playfair Display* (vintage titles), *Lora* (editorial body text), and *Caveat* (handwritten marginalia).
- **Interactive 3D Page Flip**:
  - Dual-page spread on desktop (Left + Right page).
  - 3D CSS perspective transforms with dynamic cast shadows during turns.
  - Interactive corner-peel hover hint (invites users to turn pages).
  - Flexible navigation: Arrow keys (`←` / `→`), clickable page edges, next/prev buttons, and mobile touch swipe.
  - Responsive single-page notebook mode on mobile and tablets.
  - Optional paper rustle sound effect generated natively with Web Audio API (zero audio files needed, zero external dependencies).

---

## 🗂️ Project Directory Structure

```
ReadingNotes/
├── index.html                  # Main journal viewer (GitHub Pages entrypoint)
├── doc/                        # Documentation directory
│   ├── context.md              # Conceptual architecture & vision
│   └── implementation_plan.md  # Step-by-step roadmap
├── css/
│   ├── main.css                # Base reset, desk surface, controls, themes
│   ├── book.css                # Hardcover casing, spine fold, parchment, typography, layout
│   └── page-flip.css           # 3D transforms, page curl, flip animations & lighting
├── js/
│   ├── audio.js                # Synthesized paper rustle using Web Audio API
│   ├── page-flip-engine.js     # Spread management, 3D flip mechanics, gestures & keyboard
│   ├── templates.js            # Modular page renderers (Cover, Index, Spreads, Back)
│   └── app.js                  # Data loading, search/filter, bookmarking, init
├── data/
│   └── books.json              # Data store for books, reflections, quotes, stories & marginalia
└── assets/
    └── icons/                  # Subtle SVGs (feather quill, bookmark, search)
```

---

## 📋 Implementation Checklist

### Phase 1: Directory Setup & Data Schema
- [x] Create `doc/` folder and move documentation.
- [ ] Create folder structure (`css/`, `js/`, `data/`, `assets/`).
- [ ] Craft `data/books.json` with rich, diverse sample book records (*Atomic Habits*, *Meditations*, *The Psychology of Money*, *Klara and the Sun*).

### Phase 2: Design Tokens & Physical Book Styling
- [ ] `css/main.css`: Ambient desk lighting, dark wood texture, header ribbon, floating toolbar.
- [ ] `css/book.css`: Hardcover binding, spine crease shadow, paper grain, vintage serif typography (*Cinzel*, *Lora*, *Caveat*), blockquotes, post-it notes.
- [ ] `css/page-flip.css`: 3D perspective, page rotation keyframes, dynamic shadow overlays, corner curling.

### Phase 3: JavaScript Core & Page Flip Engine
- [ ] `js/audio.js`: Native Web Audio paper rustle generator.
- [ ] `js/page-flip-engine.js`: Dual-page spread state machine, 3D flip animation orchestrator, keyboard & touch handlers.
- [ ] `js/templates.js`: HTML templates for Book Cover, Table of Contents, Reading Spreads (Left + Right), and Back Matter.
- [ ] `js/app.js`: Data fetching, live search & tag filtering, ribbon bookmark memory (`localStorage`), theme toggling.

### Phase 4: Main Entry Point & GitHub Pages Validation
- [ ] `index.html`: Fully relative paths, semantic HTML5, accessible controls, responsive viewport.
- [ ] In-browser verification with full visual and interaction testing.
- [ ] Document quick instructions for pushing to GitHub and turning on GitHub Pages.
