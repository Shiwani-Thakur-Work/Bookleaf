/**
 * 3D Page Flip Engine
 * Manages dual-page spreads, 3D flip animations, corner curling,
 * keyboard navigation, touch swipes, and responsive mobile adaptation.
 */

class PageFlipEngine {
  constructor(options = {}) {
    this.container = options.container || document.getElementById('book-container');
    this.spreads = []; // Array of spread objects { type: 'cover' | 'spread', leftHtml, rightHtml, title }
    this.currentSpreadIndex = 0;
    this.isAnimating = false;
    this.onSpreadChange = options.onSpreadChange || (() => {});
    this.isMobile = window.innerWidth <= 860;

    this.initResizeListener();
    this.initKeyboardControls();
  }

  setSpreads(spreads) {
    this.spreads = spreads;
    // Check if user has a saved bookmark
    const saved = localStorage.getItem('reading_journal_bookmark');
    let initialIndex = 0;
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < this.spreads.length) {
        initialIndex = parsed;
      }
    }
    this.currentSpreadIndex = initialIndex;
    this.render();
  }

  initResizeListener() {
    window.addEventListener('resize', () => {
      const nowMobile = window.innerWidth <= 860;
      if (nowMobile !== this.isMobile) {
        this.isMobile = nowMobile;
        this.render();
      }
    });
  }

  initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      // Don't capture when typing in search inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        this.nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.goToSpread(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.goToSpread(this.spreads.length - 1);
      }
    });
  }

  getCurrentSpread() {
    return this.spreads[this.currentSpreadIndex];
  }

  canGoNext() {
    return this.currentSpreadIndex < this.spreads.length - 1;
  }

  canGoPrev() {
    return this.currentSpreadIndex > 0;
  }

  nextPage() {
    if (this.isAnimating || !this.canGoNext()) return;
    this.triggerFlip(this.currentSpreadIndex + 1, 'forward');
  }

  prevPage() {
    if (this.isAnimating || !this.canGoPrev()) return;
    this.triggerFlip(this.currentSpreadIndex - 1, 'backward');
  }

  goToSpread(targetIndex) {
    if (this.isAnimating) return;
    if (targetIndex === this.currentSpreadIndex) return;
    if (targetIndex < 0 || targetIndex >= this.spreads.length) return;

    const direction = targetIndex > this.currentSpreadIndex ? 'forward' : 'backward';
    this.triggerFlip(targetIndex, direction);
  }

  triggerFlip(newIndex, direction) {
    this.isAnimating = true;
    if (window.pageSoundFX) {
      window.pageSoundFX.playTurnSound();
    }

    const currentSpread = this.getCurrentSpread();
    const targetSpread = this.spreads[newIndex];

    const bookElem = this.container.querySelector('.book-casing');
    if (!bookElem) {
      this.currentSpreadIndex = newIndex;
      this.render();
      this.isAnimating = false;
      return;
    }

    // Add animation direction classes
    bookElem.classList.remove('turning-forward', 'turning-backward');
    bookElem.classList.add(direction === 'forward' ? 'turning-forward' : 'turning-backward');

    // Create 3D turning leaf element for authentic visual peel
    const turningLeaf = document.createElement('div');
    turningLeaf.className = `turning-leaf leaf-${direction}`;

    if (direction === 'forward') {
      // The right page turns toward the left
      turningLeaf.innerHTML = `
        <div class="leaf-face leaf-front">${currentSpread.rightHtml || ''}</div>
        <div class="leaf-face leaf-back">${targetSpread.leftHtml || ''}</div>
        <div class="leaf-shadow"></div>
      `;
    } else {
      // The left page turns toward the right
      turningLeaf.innerHTML = `
        <div class="leaf-face leaf-front">${currentSpread.leftHtml || ''}</div>
        <div class="leaf-face leaf-back">${targetSpread.rightHtml || ''}</div>
        <div class="leaf-shadow"></div>
      `;
    }

    bookElem.appendChild(turningLeaf);

    // After animation finishes (~600ms), update DOM and render new state
    setTimeout(() => {
      this.currentSpreadIndex = newIndex;
      this.render();
      this.isAnimating = false;
      this.onSpreadChange(this.currentSpreadIndex, this.spreads.length);
    }, 550);
  }

  render() {
    if (!this.spreads.length) return;
    const spread = this.getCurrentSpread();
    const isCover = spread.type === 'cover';
    const isBackCover = spread.type === 'back';

    let casingClass = 'book-casing';
    if (isCover) casingClass += ' is-closed-front';
    if (isBackCover) casingClass += ' is-closed-back';
    if (this.isMobile) casingClass += ' is-mobile-view';

    this.container.innerHTML = `
      <div class="${casingClass}" id="book-casing">
        <!-- Spine Gutter Shadow -->
        <div class="spine-crease"></div>
        <div class="spine-crease-highlight"></div>

        <!-- Left Page Container -->
        <div class="book-page page-side-left ${isCover ? 'hidden-cover-side' : ''}" id="left-page-container">
          ${spread.leftHtml || '<div class="empty-page"></div>'}
          <div class="page-edge-click edge-left" title="Previous page (or click ← key)"></div>
        </div>

        <!-- Right Page Container -->
        <div class="book-page page-side-right ${isBackCover ? 'hidden-back-side' : ''}" id="right-page-container">
          ${spread.rightHtml || '<div class="empty-page"></div>'}
          <div class="page-edge-click edge-right" title="Next page (or click → key)">
            <div class="corner-curl-hint" title="Turn page"></div>
          </div>
        </div>

        <!-- Hanging Bookmark Ribbon -->
        <div class="bookmark-ribbon" id="bookmark-ribbon" title="Click to bookmark this page">
          <div class="ribbon-tail"></div>
        </div>
      </div>
    `;

    this.attachDomEvents();
    this.onSpreadChange(this.currentSpreadIndex, this.spreads.length);
  }

  attachDomEvents() {
    // Open book button
    const openBtn = document.getElementById('btn-open-book');
    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.nextPage();
      });
    }

    // Return to start button
    const returnBtn = document.getElementById('btn-return-start');
    if (returnBtn) {
      returnBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.goToSpread(0);
      });
    }

    // Edge clicking
    const leftEdge = this.container.querySelector('.edge-left');
    if (leftEdge) {
      leftEdge.addEventListener('click', () => this.prevPage());
    }

    const rightEdge = this.container.querySelector('.edge-right');
    if (rightEdge) {
      rightEdge.addEventListener('click', () => this.nextPage());
    }

    // Bookmark Ribbon Click
    const ribbon = document.getElementById('bookmark-ribbon');
    if (ribbon) {
      const saved = localStorage.getItem('reading_journal_bookmark');
      if (saved !== null && parseInt(saved, 10) === this.currentSpreadIndex) {
        ribbon.classList.add('bookmarked');
      }

      ribbon.addEventListener('click', () => {
        localStorage.setItem('reading_journal_bookmark', this.currentSpreadIndex.toString());
        ribbon.classList.add('bookmarked');
        this.showToast('🔖 Ribbon Bookmark placed on this page!');
      });
    }

    // Touch swipe handling for mobile / tablets
    let touchStartX = 0;
    let touchStartY = 0;
    const casing = document.getElementById('book-casing');
    if (casing) {
      casing.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      casing.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Detect horizontal swipe if delta X is greater than vertical movement
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            this.nextPage(); // swipe left -> turn next
          } else {
            this.prevPage(); // swipe right -> turn prev
          }
        }
      }, { passive: true });
    }
  }

  showToast(message) {
    let toast = document.getElementById('journal-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'journal-toast';
      toast.className = 'journal-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }
}

window.PageFlipEngine = PageFlipEngine;
