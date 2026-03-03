# Medical Writing & Research Support – Website

A static website for **Medical Writing & Research Support**, built for [GitHub Pages](https://pages.github.com/). Anyone with access to this repository can edit the content and see updates live on the site.

---

## Keeping the theme consistent

- **Content only** → Edit **`index.html`**. Change the text inside the existing sections; keep the same HTML structure (same class names and section IDs) so the look stays the same.
- **Look only** → Edit **`styles.css`**. Change only the **`:root`** block at the top (colours, font, spacing, radius). The rest of the CSS uses those variables, so the whole site stays consistent.

Do not mix: avoid adding inline styles or new colours in `index.html`; avoid changing section structure when you only want to update copy.

---

## How to change the content

All visible content is in **`index.html`**. Use this map to find what to edit:

| What you want to change | Where in `index.html` |
|-------------------------|------------------------|
| **Logo** | Inside `<a class="logo">`: the `<img src="logo.png">` and the `<span class="logo-text">` (site name). |
| **Nav links** | The `<nav>` block: link text and `href="#..."` (keep the # IDs if you keep the same section IDs). |
| **Hero (top)** | Section `id="home"`: badge text, `<h1 class="hero-title">`, `<p class="hero-lead">` and `<p class="hero-text">` paragraphs, and the two buttons. |
| **About** | Section `id="about"`: intro paragraph, the three **chips**, then the two following paragraphs. |
| **Services** | Section `id="services"`. Each service is `<details class="accordion-item">`: the clickable title is in `<summary class="accordion-trigger">`, the full text in `<div class="accordion-content">`. To add a service, copy a full `<details>…</details>` block. |
| **Experience** | Section `id="experience"`: each `<li class="timeline-item">` is one bullet. Edit or add list items. |
| **Team** | Section `id="team"`: intro, the three **chips**, then the last two paragraphs. |
| **Contact** | Section `id="contact"`: inside `<div class="contact-card">` — Email, Phone, Location rows; and `<p class="contact-note">`. |
| **Footer** | `<footer class="site-footer">`: brand name, tagline, footer nav links, copyright, "Back to top". |
| **Page title / SEO** | In `<head>`: `<title>` and `<meta name="description">`. |

---

## Code review notes

**Section header alignment**  
All section headers (hero h1 and each section h2) use the same indentation in the HTML and align on the same left edge on the page:

- **Hero** uses `hero__inner` with `max-width: var(--container)` (720px).
- **About, Experience, Team, Contact** use `.container` (720px); in the source, each has `<section>` → `<div class="container">` → `<h2 class="section-title">` at the same nesting level.
- **Services** uses `.container--wide` (960px) for the accordion; the “Services” title and lead are aligned with the other sections via CSS (`.container--wide > .section-title` and `.section-lead` get `max-width: var(--container)` and `margin-inline: auto` so they sit in a 720px band and match the others).

**Structure**  
- One `<h1>` (hero), then `<h2 class="section-title">` for each section. Outline is valid.
- Each main section has a unique `id` matching nav `href="#..."` for in-page links and nav highlighting.
- No inline styles; layout and theme come from `styles.css` and `:root` variables.

**Accessibility**  
- Nav has `aria-label="Main"`, footer nav `aria-label="Footer"`.
- Hamburger button has `aria-label="Toggle menu"` and `aria-expanded` updated by script.
- Logo image uses `alt=""` (decorative; site name is in text next to it).
- Focus styles are set for logo and nav links (`:focus-visible`).
- Services accordion uses native `<details>`/`<summary>` (no extra ARIA required).

**Script**  
- `script.js` only toggles the mobile nav and sets the active nav link from scroll; no dependencies.

---

## Editing the website

Content lives in **`index.html`** (and theme in **`styles.css`**). You can edit in two ways:

### Option 1: Edit on GitHub (no install needed)

1. Open this repo on GitHub.
2. Click **`index.html`**.
3. Click the **pencil icon** (Edit this file).
4. Change the text inside the relevant section (e.g. under `<!-- ========== ABOUT ========== -->`).
5. Scroll down and click **Commit changes** (optionally add a short message like “Updated contact email”).

Edits to **`styles.css`** change colours, fonts, and layout. Edit that file the same way if you want to tweak the look.

### Option 2: Edit locally

1. Clone the repo:  
   `git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`
2. Open **`index.html`** (and **`styles.css`** if needed) in any text editor.
3. Save, then commit and push:
   ```bash
   git add index.html styles.css
   git commit -m "Update website content"
   git push
   ```

---

## Deploying to GitHub Pages

### 1. Enable GitHub Pages

1. On GitHub, open this repository.
2. Go to **Settings** → **Pages** (under “Code and automation”).
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, pick **main** (or **master**) and **/ (root)**.
5. Click **Save**.

### 2. Custom domain: www.medicalthesishelp.in

This repo includes a **CNAME** file set to **www.medicalthesishelp.in**. After enabling Pages:

1. In **Settings** → **Pages**, find **Custom domain**.
2. Enter **www.medicalthesishelp.in** and click **Save**.
3. Wait for DNS to be checked; when ready, **Enforce HTTPS** can be enabled.

### 3. DNS configuration (at your domain registrar)

Configure DNS where you bought **medicalthesishelp.in** (GoDaddy, Namecheap, Google Domains, etc.):

| Type    | Name | Value                    | TTL (optional) |
|---------|------|--------------------------|----------------|
| **CNAME** | `www` | `YOUR_USERNAME.github.io` | 3600           |

- **Name:** `www` (or `www.medicalthesishelp.in` if the registrar requires the full hostname).
- **Value:** Your GitHub username followed by `.github.io` (e.g. `johndoe.github.io`).

**If you also want the apex domain (medicalthesishelp.in) to open the site**, add these A records:

| Type | Name | Value           |
|------|------|-----------------|
| **A** | `@`  | `185.199.108.153` |
| **A** | `@`  | `185.199.109.153` |
| **A** | `@`  | `185.199.110.153` |
| **A** | `@`  | `185.199.111.153` |

(GitHub's IPs: [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).)

DNS can take from a few minutes up to 48 hours to propagate. The site will then be live at **https://www.medicalthesishelp.in**.

---

## File overview

| File            | Purpose                                      |
|-----------------|----------------------------------------------|
| `index.html`    | All page content (sections, text, structure) |
| `styles.css`    | Colours, typography, layout, responsiveness  |
| `script.js`     | Mobile menu toggle                           |
| `CNAME`         | Custom domain (www.medicalthesishelp.in)      |
| `README.md`     | This file                                    |

No build step or extra tools are required; GitHub Pages serves these files as-is.

---

## Changing the theme (colours, font, spacing)

In **`styles.css`**, the **`:root`** block at the top defines the whole theme. Edit only these to keep the site consistent:

| Variable | Purpose |
|----------|--------|
| `--color-bg` / `--color-bg-alt` | Page and alternate section backgrounds |
| `--color-surface` | Cards, header, contact block background |
| `--color-text` / `--color-text-muted` | Body text and secondary text |
| `--color-accent` / `--color-accent-hover` | Buttons, links, highlights |
| `--color-border` / `--color-border-strong` | Borders and dividers |
| `--color-footer-bg` / `--color-footer-text` / `--color-footer-muted` | Footer background and text |
| `--font` | Font family (Inter); also set in `index.html` for the Google Font link |
| `--space-*` (e.g. `--space-lg`) | Spacing scale |
| `--radius` | Rounded corners (buttons, cards, accordion) |
| `--shadow-sm` / `--shadow-md` | Subtle shadows |

After changing **`--font`**, update the `<link href="...">` in **`index.html`** to load the new font (e.g. from Google Fonts) if needed.
