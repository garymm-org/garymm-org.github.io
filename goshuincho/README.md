# Goshuincho Companion App

A mobile- and desktop-friendly web app that displays the calligraphy from a Japanese goshuincho (御朱印帳, temple/shrine red seal book) along with romaji transliterations and English translations.

Lives at: https://www.garymm.org/goshuincho/

## Files

- `index.html` — Single-page app shell
- `style.css` — All styles
- `app.js` — Carousel, info card, and navigation logic
- `data.json` — Page content (text elements + phrase translations + metadata)

No build step. Jekyll passes the directory through verbatim during the normal site build.

## Right-to-left reading order

Japanese books are read right-to-left. The `data.json` `pages` array is in canonical book order (`pages[0]` is the cover, `pages[1]` is the first page, etc.), but the carousel renders them in reversed order so that:

- The **cover** appears on the **far right** of the carousel.
- The **last page** appears on the **far left**.
- The app starts with the cover visible.
- Pressing **ArrowLeft** (or swiping left) advances **forward** through the book.
- Pressing **ArrowRight** (or swiping right) goes **back** toward the cover.

Each page has a stable URL via hash fragment (e.g. `#0` for the cover, `#5` for the 5th page).

## Source of truth: Google Sheet

The canonical transcription/translation data lives in this Google Sheet:

https://docs.google.com/spreadsheets/d/1xrMCj4L4HA5n1xMdjHQPMEL9M9ZPLpamXxzJYB3uwwQ

**Always update the Google Sheet first**, then sync the changes into `data.json`. The sheet has one tab per book page (Cover + p1…p12), with columns: `Kanji`, `Romaji`, `English`, `maps`, `wiki`.

When syncing:

- Each sheet tab maps to one entry in `data.json`'s `pages` array, in the same order as the tabs in the sheet.
- The `phrases` array in `data.json` mirrors the rows of the corresponding sheet tab.
- `mapsUrl` and `wikiUrl` come from the `maps` and `wiki` columns of the first row.
- `title` identifies the page in the info card header.
- `commentary` — *optional*. Rendered below the title in the info card. Supports HTML (e.g. `<a>` links).
- `textElements` describe what is visually rendered on the page (positions, sizes, vertical/horizontal). These are NOT in the sheet — they were extracted from photographs of the book and may need manual tweaking. When the sheet's text content for a page changes, update the matching `textElements[].text` to match.
- `pageStyle` — *optional*. A string tag that triggers per-page CSS styling. `app.js` adds a `page-inner--<value>` class to the page's inner element. Currently used for `"cover"`, which applies the brocade background image (`assets/cover-background.webp`) and the light title slip behind the cover kanji.

### `textElements` field reference

Each element has:

- `text` — the string to render
- `x`, `y` — position as a percentage from the top-left of the page card (fractional values work)
- `color` — `"black"` or `"red"`
- `vertical` — `true` for top-to-bottom Japanese writing, `false` for horizontal
- `fontSize` — controls how big the text renders. Three accepted forms:
  - **Number** (recommended for fine control): interpreted as `cqw` units, i.e. percent of the page card's width. E.g. `"fontSize": 12` renders at 12% of the page width and scales naturally on every screen size. Useful range is roughly `3` (tiny) to `50` (huge).
  - **Semantic preset string**: one of `"small"` (4cqw), `"medium"` (6cqw, bold), `"large"` (9cqw, bold), `"xlarge"` (14cqw, black). Defined in `style.css` under `.text-element.size-*`.
  - **Raw CSS string**: any valid CSS `font-size` value, e.g. `"32px"`, `"2rem"`, `"10cqw"`. Used as-is.
- `fontWeight` — *optional*. Any valid CSS `font-weight` value (`400`, `700`, `"bold"`, etc.). When `fontSize` is a number or raw string, the default weight is `700`. When `fontSize` is a semantic preset, the preset's own weight applies unless overridden here.

### `phrases` field reference

Each phrase has:

- `kanji` — the Japanese text
- `romaji` — romanized pronunciation
- `english` — English translation (supports HTML, e.g. Wikipedia `<a>` links for proper nouns)
- `commentary` — *optional*. Rendered below the English translation. Supports HTML.

The original photographs (as input to vision models for transcription) are not in the repo.
