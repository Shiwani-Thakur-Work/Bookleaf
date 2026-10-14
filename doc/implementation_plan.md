# 🛠️ Digital Reading Journal — Implementation Plan

> **Deployment Principle**: **100% Native GitHub Pages Direct Deployment**.
> Zero 3rd-party tools, zero build dependencies, and zero complex setups. Simply push the repository to GitHub, enable GitHub Pages in repo settings, and the site is live instantly.

---

## 🎯 Architecture & Visual Direction

### 1. Modern Bookshelf & Single-Book Reader
- **Bookshelf View ("Single Look Not Open")**:
  - Each book is presented as a sleek, standalone 3D closed book cover.
  - Features cloth/matte textured covers, spine edge lighting, custom symbols, title, author, star rating, and a sneak-peek one-liner.
  - Hovering lifts the book with a soft ambient shadow.
  - Clicking any book smoothly transitions into the **Book Reader View** for that specific book.
  - Search bar and genre filter chips (#Habits, #Philosophy, #Finance, #Fiction) filter the shelf in real-time.
- **Kindle-Inspired Reading View ("Open Book Experience")**:
  - Dual-page spread layout with center gutter shadow on desktop; responsive single-page layout on mobile.
  - **Left Page**: Book identity, tags, reading date, star rating, "The Core Spark" (What I Liked), and Core Concepts.
  - **Right Page**: Kindle-style Standout Highlights (with warm amber highlight underlines and Location / Page references), Stories & Parables, and handwritten-style Marginalia post-its.
  - **Kindle Reading Controls**:
    - **Font Size Adjuster (`A-` / `A+`)**: Scalable reading typography saved in `localStorage`.
    - **Reading Palette**:
      - *Warm Light / Paperwhite*: Low eye strain warm beige cream (`#F4EFE6`), calm charcoal ink (`#242220`).
      - *Kindle Dark*: Soft slate charcoal (`#18191C`) with gentle silver text (`#E4E6EB`), avoiding harsh pitch-black contrast.
    - **Reading Progress Bar**: Kindle-style progress indicator (`Book X of Y • % of Library`) with `← Previous Book` and `Next Book →` buttons.
    - **Bookmarks**: Bookmark toggle on any book with quick jump from the top header.

---

## 🗂️ Project Directory Structure

```
ReadingNotes/
├── index.html                  # Main viewer shell (GitHub Pages entrypoint)
├── README.md                   # Quickstart, deployment guide & guide to adding books
├── doc/                        # Documentation directory
│   ├── context.md              # Conceptual architecture & vision
│   └── implementation_plan.md  # Step-by-step roadmap
├── css/
│   ├── main.css                # Kindle-inspired palettes, header, tokens & typography
│   ├── bookshelf.css           # 3D single closed book cards, hero stats, search & tags
│   └── reader.css              # Kindle highlights, open book shell, progress bar, marginalia
├── js/
│   ├── audio.js                # Synthesized paper rustle using Web Audio API
│   └── app.js                  # Bookshelf & reader controller, Kindle font scaling, filters
└── data/
    └── books.json              # Clean data store for books, reflections, quotes & marginalia
```

---

## 📋 Implementation Status

- [x] **Phase 1: Project Scaffolding & Git Init**
  - Git initialized with `main` branch.
  - Pure static HTML/CSS/JS with strict relative paths (`./css/`, `./js/`, `./data/`).
- [x] **Phase 2: Modern 3D Closed Book Shelf**
  - Standalone 3D book covers with spine shadows and hover elevations.
  - Real-time search and genre tag filters.
  - Quick library statistics (volumes, highlights, stories).
- [x] **Phase 3: Kindle-Inspired Open Book Reader**
  - Click-to-open book transition.
  - Dual-leaf spread layout on desktop, stacked on mobile.
  - Kindle quote highlights with amber highlight underlines and Location references.
  - Stories and handwritten marginalia cards.
- [x] **Phase 4: Kindle Reading Tools**
  - `A-` / `A+` font size controls.
  - Warm Paperwhite vs Kindle Soft Dark mode.
  - Reading progress bar and fast next/previous book jumps.
  - Bookmark persistence via `localStorage`.
  - Paper rustle sound effects via Web Audio API.
