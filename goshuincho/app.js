(function () {
  "use strict";

  // The book is read right-to-left (Japanese convention).
  // The `pages` array is in canonical book order: pages[0] is the cover,
  // pages[1] is the first temple, etc.
  // The carousel renders them in REVERSED order so that the cover appears
  // on the far RIGHT and the last page on the far LEFT, matching the
  // physical book layout.
  //
  // bookIndex: position in canonical book order (0 = cover)
  // visualIndex: position in DOM/carousel (0 = leftmost = last page in book)
  // Conversion: visualIndex = (numPages - 1) - bookIndex

  let pages = [];
  let currentPage = 0; // bookIndex

  const carousel = document.getElementById("carousel");
  const indicators = document.getElementById("page-indicators");
  const navLeft = document.getElementById("nav-left");
  const navRight = document.getElementById("nav-right");
  const infoButton = document.getElementById("info-button");
  const card = document.getElementById("card");
  const cardClose = document.getElementById("card-close");
  const cardContent = document.getElementById("card-content");
  const cardBackdrop = document.getElementById("card-backdrop");

  let cardOpen = false;

  // --- Index conversion helpers ---
  function bookToVisual(bookIndex) {
    return pages.length - 1 - bookIndex;
  }
  function visualToBook(visualIndex) {
    return pages.length - 1 - visualIndex;
  }

  // --- Slug helpers (for URL hash routing) ---
  // The slug is just the book index (0 = cover, 1 = first page, etc.).
  function pageSlug(page, bookIndex) {
    return String(bookIndex);
  }
  function findPageBySlug(slug) {
    const n = parseInt(slug, 10);
    if (Number.isInteger(n) && n >= 0 && n < pages.length) return n;
    return -1;
  }

  // --- Load data and render ---
  fetch("data.json")
    .then((r) => r.json())
    .then((data) => {
      pages = data.pages;

      // Determine initial page from URL hash before rendering indicators
      const initialSlug = decodeURIComponent((location.hash || "").replace(/^#/, ""));
      const initialIndex = initialSlug ? findPageBySlug(initialSlug) : 0;
      currentPage = initialIndex >= 0 ? initialIndex : 0;

      renderPages();
      renderIndicators();
      setupPageObserver();
      updateCardContent();
      scrollToPage(currentPage, false);
      updateUrlHash();
    });

  function renderPages() {
    carousel.innerHTML = "";
    // Render in reversed order so the cover ends up on the right
    for (let visualIndex = 0; visualIndex < pages.length; visualIndex++) {
      const page = pages[visualToBook(visualIndex)];
      const pageEl = document.createElement("div");
      pageEl.className = "page";

      const inner = document.createElement("div");
      inner.className = "page-inner";
      if (page.pageStyle) {
        inner.classList.add(`page-inner--${page.pageStyle}`);
      }

      for (const el of page.textElements) {
        const textEl = document.createElement("div");
        textEl.className = `text-element color-${el.color}`;
        if (el.vertical) textEl.classList.add("vertical");

        // fontSize: a number is treated as cqw (% of page width); a string is
        // treated as either a semantic preset name (small/medium/large/xlarge)
        // or a raw CSS value (e.g. "12cqw", "32px", "1.5rem").
        if (typeof el.fontSize === "number") {
          textEl.style.fontSize = el.fontSize + "cqw";
          textEl.style.fontWeight = el.fontWeight != null ? el.fontWeight : 700;
        } else if (
          el.fontSize === "small" ||
          el.fontSize === "medium" ||
          el.fontSize === "large" ||
          el.fontSize === "xlarge"
        ) {
          textEl.classList.add(`size-${el.fontSize}`);
          if (el.fontWeight != null) textEl.style.fontWeight = el.fontWeight;
        } else if (typeof el.fontSize === "string") {
          textEl.style.fontSize = el.fontSize;
          if (el.fontWeight != null) textEl.style.fontWeight = el.fontWeight;
        }

        textEl.textContent = el.text;
        textEl.style.left = el.x + "%";
        textEl.style.top = el.y + "%";
        inner.appendChild(textEl);
      }

      pageEl.appendChild(inner);
      carousel.appendChild(pageEl);
    }
  }

  function renderIndicators() {
    indicators.innerHTML = "";
    // Indicators in visual (left-to-right) order: leftmost dot = last page in book,
    // rightmost dot = cover. So we iterate visualIndex from 0 to N-1.
    for (let visualIndex = 0; visualIndex < pages.length; visualIndex++) {
      const bookIndex = visualToBook(visualIndex);
      const dot = document.createElement("div");
      dot.className = "page-dot" + (bookIndex === currentPage ? " active" : "");
      dot.addEventListener("click", () => scrollToPage(bookIndex));
      indicators.appendChild(dot);
    }
  }

  function updateIndicators() {
    const dots = indicators.querySelectorAll(".page-dot");
    dots.forEach((dot, visualIndex) => {
      const bookIndex = visualToBook(visualIndex);
      dot.classList.toggle("active", bookIndex === currentPage);
    });
  }

  function scrollToPage(bookIndex, smooth = true) {
    if (bookIndex < 0 || bookIndex >= pages.length) return;
    const visualIndex = bookToVisual(bookIndex);
    const el = carousel.children[visualIndex];
    if (!el) return;
    el.scrollIntoView({ behavior: smooth ? "smooth" : "instant", inline: "start", block: "nearest" });
  }

  // --- Update URL hash to reflect the current page ---
  function updateUrlHash() {
    const slug = pageSlug(pages[currentPage], currentPage);
    const newHash = "#" + slug;
    if (location.hash !== newHash) {
      history.replaceState(null, "", newHash);
    }
  }

  // --- Detect page changes via IntersectionObserver ---
  // Using an observer instead of scroll math so that variable-width (wide)
  // pages are handled correctly.
  function setupPageObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const visualIndex = Array.from(carousel.children).indexOf(entry.target);
            const newPage = visualToBook(visualIndex);
            if (newPage !== currentPage && newPage >= 0 && newPage < pages.length) {
              currentPage = newPage;
              updateIndicators();
              updateCardContent();
              updateUrlHash();
            }
          }
        }
      },
      { root: carousel, threshold: 0.5 }
    );
    for (const child of carousel.children) {
      observer.observe(child);
    }
  }

  // --- Respond to external hash changes (e.g. user pastes a link, hits back) ---
  window.addEventListener("hashchange", () => {
    const slug = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    const idx = findPageBySlug(slug);
    if (idx >= 0 && idx !== currentPage) {
      scrollToPage(idx);
    }
  });

  // --- Arrow navigation ---
  // In the right-to-left layout, the visual "left" arrow advances to the
  // next page in the book (forward), and the visual "right" arrow goes back
  // toward the cover.
  navLeft.addEventListener("click", () => scrollToPage(currentPage + 1));
  navRight.addEventListener("click", () => scrollToPage(currentPage - 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") scrollToPage(currentPage + 1);
    if (e.key === "ArrowRight") scrollToPage(currentPage - 1);
    if (e.key === "Escape") closeCard();
  });

  // --- Card content ---
  function updateCardContent() {
    const page = pages[currentPage];
    if (!page) return;

    let html = "";
    html += `<div class="card-title">${page.title}</div>`;
    if (page.commentary) {
      html += `<div class="card-commentary">${page.commentary}</div>`;
    }

    if (page.mapsUrl || page.wikiUrl) {
      html += '<div class="card-links">';
      if (page.mapsUrl) {
        html += `<a href="${page.mapsUrl}" target="_blank" rel="noopener">Maps</a>`;
      }
      if (page.wikiUrl) {
        html += `<a href="${page.wikiUrl}" target="_blank" rel="noopener">Wikipedia</a>`;
      }
      html += "</div>";
    }

    html += "<hr class='card-divider'>";
    html += '<ul class="phrase-list">';
    for (const phrase of page.phrases) {
      html += '<li class="phrase-item">';
      html += `<span class="phrase-kanji">${phrase.kanji}</span>`;
      html += `<span class="phrase-romaji">${phrase.romaji}</span>`;
      html += `<span class="phrase-english">${phrase.english}</span>`;
      if (phrase.commentary) {
        html += `<span class="phrase-commentary">${phrase.commentary}</span>`;
      }
      html += "</li>";
    }
    html += "</ul>";

    cardContent.innerHTML = html;
  }

  // --- Card open/close ---
  function openCard() {
    cardOpen = true;
    card.classList.add("open");
    cardBackdrop.classList.add("visible");
    infoButton.classList.add("hidden");
    carousel.style.overflowX = "hidden";
  }

  function closeCard() {
    cardOpen = false;
    card.classList.remove("open");
    cardBackdrop.classList.remove("visible");
    infoButton.classList.remove("hidden");
    carousel.style.overflowX = "auto";
  }

  infoButton.addEventListener("click", openCard);
  cardClose.addEventListener("click", closeCard);
  cardBackdrop.addEventListener("click", closeCard);
})();
