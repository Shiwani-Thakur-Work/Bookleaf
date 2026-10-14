# 🍃 Bookleaf — Personal Reading Notes

> A modern, Kindle-inspired digital reading journal with authentic 3D page-flip animations, reflections, quotes, and marginalia.

🔗 **Live Website**: [https://shiwani-thakur-work.github.io/Bookleaf/](https://shiwani-thakur-work.github.io/Bookleaf/)

---

## ✨ Features

- **Modern Personal Bookshelf ("Single Look Not Open")**:
  - Each book appears as a standalone 3D closed volume with cloth/matte textured cover jackets, spine shadows, and embossed symbols.
  - Hover elevation with soft ambient shadows.
  - Real-time search by title, author, key idea, or quote.
  - Genre filter chips (#Habits, #Philosophy, #Finance, #Fiction).
  - Quick library stats: Total volumes, highlights, and stories.
- **Kindle-Inspired Reading Experience ("Open Book View")**:
  - Clicking any book smoothly opens its personal journal.
  - **Left Page**: Book identity, tags, reading date, star rating, one-liner callout, "The Core Spark" (What I Liked), and Core Concepts.
  - **Right Page**:
    - **Standout Highlights & Quotes**: Kindle-style amber highlight underlines with Location citations (`Loc 412`) and reflection notes.
    - **Stories & Parables**: Memorable anecdotes from the book.
    - **Handwritten Marginalia**: Sticky note with personalized observations.
- **Kindle Reading Tools**:
  - **Font Size Adjuster (`A-` / `A+`)**: Increase or decrease reading text size on the fly (saved to `localStorage`).
  - **Calibrated Reading Themes**:
    - **Warm Light / Paperwhite**: Gentle cream-beige background (`#F4EFE6`) with soft charcoal ink (`#242220`) for fatigue-free daylight reading.
    - **Kindle Dark**: Soft slate charcoal (`#18191C`) with gentle silver text (`#E4E6EB`) — no harsh pitch-black contrast.
  - **Reading Progress Bar**: Kindle-style progress tracker with `← Previous Book` and `Next Book →` buttons.
  - **Bookmarks**: Bookmark any title with 1-click header access to your saved books.
  - **Tactile Paper Sound**: Synthesized soft paper rustle on book open / turns via Web Audio API (mute toggle included).

---

## 🚀 How to Deploy Directly to GitHub Pages (2 Minutes)

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: Modern bookshelf view and Kindle-inspired reader"
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** → **Pages**.
   - Under **Build and deployment** > **Branch**: select `main` and `/ (root)`.
   - Click **Save**.

3. **Live within 60 seconds** at:
   ```
   https://<your-username>.github.io/ReadingNotes/
   ```

---

## ✍️ How to Add a New Book

Open [`data/books.json`](./data/books.json) and add a new entry:

```json
{
  "id": "deep-work",
  "title": "Deep Work",
  "author": "Cal Newport",
  "year": "2016",
  "genreTags": ["Focus", "Productivity"],
  "rating": 5,
  "dateRead": "October 2026",
  "accentColor": "#8A3B22",
  "coverSymbol": "🧠",
  "oneLiner": "The ability to perform deep work is becoming increasingly rare at the same time it is becoming increasingly valuable.",
  "whatILiked": "The clear distinction between shallow busywork and deep cognitively demanding focus...",
  "quotes": [
    {
      "text": "Clarity about what matters provides clarity about what does not.",
      "page": "47",
      "loc": "Loc 490",
      "note": "Ruthless prioritization."
    }
  ],
  "stories": [
    {
      "title": "Carl Jung's Bollingen Tower",
      "summary": "How Carl Jung built a private stone retreat without electricity to write in solitude."
    }
  ],
  "topics": [
    {
      "name": "The Law of Vital Few",
      "takeaway": "80% of valuable output comes from 20% of high-leverage focus."
    }
  ],
  "marginalia": {
    "note": "Schedule 90-minute morning distraction-free writing blocks.",
    "date": "Oct 14",
    "sticker": "⏳"
  }
}
```

Commit to GitHub, and your new book will immediately appear on the shelf!

---

## 💻 Local Preview
Run the local server:
```bash
node server.js
```
Open **`http://localhost:4321/`** in your browser.
