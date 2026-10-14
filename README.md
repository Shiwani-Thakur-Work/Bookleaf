# 📖 The Reading Sanctuary — Digital Reading Journal

> A tactile, aesthetic digital reading journal styled like a physical hardcover book with 3D page-flip animations, paper textures, quotes, stories, and personal marginalia.

Designed to be **100% natively deployable on GitHub Pages** with **zero build tools, zero dependencies, and zero 3rd-party apps**.

---

## ✨ Features

- **Tactile Physical Book Interface**:
  - Realistic leather/cloth hardcover casing with gold-foil embossing and edge stitching.
  - Concave center spine crease with realistic fold shadows.
  - Creamy ivory parchment pages with paper grain and subtle inner-depth shadows.
  - Authentic red silk ribbon bookmark with page-memory persistence.
  - Distinctive typography using *Cinzel*, *Playfair Display*, *Lora*, and *Caveat* (handwritten marginalia).
- **Smooth 3D Page Flip Mechanics**:
  - Dual-page spread on desktop with dynamic lighting gradients during page turns.
  - Interactive corner-curl hover effects that invite turning.
  - Navigate with keyboard arrows (`←` / `→`), spacebar, bottom dock buttons, or clickable page edges.
  - Responsive single-page notebook view with touch swipe support on mobile and tablets.
- **Rich Content Schema**:
  - **What I Liked / The Core Spark**: High-level takeaways and personal reflections.
  - **Standout Passages & Quotes**: Styled blockquotes with page citations and commentary.
  - **Stories & Parables**: Anecdotes, case studies, and allegories from the book.
  - **Themes & Mental Models**: Core frameworks.
  - **Personal Marginalia**: Post-it notes with handwritten notes, timestamps, and stickers.
- **Interactive Features**:
  - **Table of Contents (Index)**: Click to jump directly to any book.
  - **Search & Tag Filter**: Real-time search by title, author, or tag (#Stoicism, #Habits, #Finance, #Fiction).
  - **Ribbon Bookmark**: Click the red hanging ribbon on any page to remember your spot. Automatically restores on revisit.
  - **Theme Toggle**: Switch between *Warm Parchment* (Day desk) and *Midnight Library* (Dark candlelit mode).
  - **Page Turn Rustle Audio**: Synthesized paper rustle using Web Audio API (zero audio file downloads, mute toggle included).

---

## 🚀 How to Deploy Directly to GitHub Pages (2 Minutes)

This project has **no build steps** and requires **no 3rd-party services**. It deploys straight from GitHub:

1. **Push this folder to a new GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Reading Sanctuary"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ReadingNotes.git
   git push -u origin main
   ```

2. **Turn on GitHub Pages**:
   - In your GitHub repository, click **Settings** (top menu).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Branch**:
     - Select `main` branch.
     - Folder: leave as `/ (root)`.
     - Click **Save**.

3. **Done!**
   - In 30 to 60 seconds, your site will be live at:
     ```
     https://<your-username>.github.io/ReadingNotes/
     ```

---

## ✍️ How to Add a New Book

To add your own reading notes, simply open [`data/books.json`](./data/books.json) and append a new record:

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
  "oneLiner": "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy.",
  "whatILiked": "The clear distinction between shallow busywork and deep cognitively demanding focus...",
  "quotes": [
    {
      "text": "Clarity about what matters provides clarity about what does not.",
      "page": "47",
      "note": "Ruthless prioritization."
    }
  ],
  "stories": [
    {
      "title": "Carl Jung's Bollingen Tower",
      "summary": "How Carl Jung built a private stone tower in the woods without electricity to write in solitude."
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

Commit the change to GitHub, and your reading journal updates automatically!

---

## 💻 Local Preview

You can preview the site locally using any simple web server:

- **Using Python**:
  ```bash
  python -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.

- **Using VS Code Live Server**:
  Right-click `index.html` and select **"Open with Live Server"**.
