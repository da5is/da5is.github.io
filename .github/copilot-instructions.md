# Copilot instructions for da5is.github.io

This is Matt Davis's personal Jekyll blog, hosted on GitHub Pages. The site's
theme is a locally vendored copy of the "monophase" Jekyll theme (see
`monophase.gemspec`) — theme files (`_layouts/`, `_includes/`, `_sass/`,
`assets/`) live directly in this repo rather than being pulled in as a gem, so
theme edits and site content edits happen in the same tree.

## Build / serve / deploy

- Install deps: `bundle install`
- Local dev server: `bundle exec jekyll serve` (site at `http://localhost:4000`)
- Production build: `bundle exec jekyll build --baseurl "<base_path>"` with
  `JEKYLL_ENV=production`
- There is no test suite or linter configured for this repo.
- Deployment is automatic: `.github/workflows/jekyll.yml` builds and deploys to
  GitHub Pages on every push to `master` (or manual `workflow_dispatch`). It
  uses Ruby 3.1 via `ruby/setup-ruby`. Do not hand-build a deploy step — pushing
  to `master` is the deploy mechanism.

## Content structure

- Blog posts live in `_posts/` using the standard Jekyll filename convention
  `YYYY-MM-DD-title.md`/`.markdown`, with front matter:
  ```yaml
  ---
  layout: post
  title:  "Post Title"
  date:   YYYY-MM-DD
  categories: some categories
  ---
  ```
- `categories_path: /tags/` and `/categories/` (set in `_config.yml`) drive the
  built-in archive-by-category/tag pages under `categories/` and `tags/`.
- Site-wide nav is data-driven via `_data/navigation.yml`; social links via
  `_data/social.yml` — edit these rather than hardcoding links in layouts.
- `_config.yml` is NOT reloaded by `jekyll serve` — restart the server after
  editing it.

## Theme conventions (monophase)

- Layouts (`_layouts/`) chain: `default.html` → `page.html`/`post.html`/`home.html`;
  archive pages (`archive.html`, `archive-by-years.html`,
  `archive-by-tagories.html`) are implemented in pure Liquid and selected via a
  page's `type:` front matter (`years`, `categories`, or `tags`).
- Optional per-page/per-post features are toggled via front matter flags, e.g.
  `comments: false` (Giscus) and `math: true` (MathJax) — see `_includes/giscus.html`
  and `_includes/mathjax.html`.
- Custom `<head>` injection point is `_includes/custom-head.html` — add
  site-wide head content there instead of editing `_includes/head.html`
  directly.
- Predefined CSS utility classes exist for alerts (`message-info`,
  `message-warning`, `message-danger`) and alignment (`align-center`,
  `align-left`, `align-right`) — prefer these over inline styles in post
  content.
- Only files matching the regex in `monophase.gemspec` (`assets`, `_layouts`,
  `_includes`, `_sass`, `LICENSE`, `README`, `_config.yml`) are packaged if this
  theme is ever published as a gem — keep that in mind if reorganizing theme
  files.
