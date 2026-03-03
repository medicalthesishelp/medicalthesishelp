# Ink & Evidence – Medical Writing & Research Support

A modernized, high-performance static website for **Ink & Evidence**, designed for [GitHub Pages](https://pages.github.com/). 

To make maintenance as easy as possible, the entire site (HTML structure, CSS styling, and JavaScript interactivity) has been consolidated into a **single file** (`index.html`).

---

## 🎨 Design & Architecture
- **Professional Palette:** Deep Navy (`#0c2340`) for authority and Surgical Silver (`#8b929a`) for a clinical feel.
- **Modern Layout:** Uses a **Bento Grid** to showcase the extensive clinical experience and **Interactive Accordions** to neatly organize detailed medical services.
- **Single-File Architecture:** Zero build tools or complex file linking required. Everything lives in `index.html`.

---

## 🛠 How to Update Content

Because the site is a single file, all text, styles, and logic are found in **`index.html`**. You can edit this file directly on GitHub.

| Component | Where to find it in `index.html` |
| :--- | :--- |
| **Site Name & Logo** | Look for `<div class="logo-text">` near the top inside the `<header>`. |
| **Hero Title & Intro** | Look for `<section id="home">`. Edit the `<h2>` and `<p>` tags inside the `hero-lead-container`. |
| **Services** | Look for `<section id="services">`. Each service is wrapped in a `<details>` block. The clickable title is in `<summary>` and the bullets are in `<ul class="content-list">`. |
| **Experience** | Look for `<section id="experience">`. Each point is wrapped in an `<div class="exp-card">`. |
| **Team** | Look for `<section id="team">`. |
| **Contact Info** | Look for `<section id="contact">`. Update the `href="mailto:..."` and `href="tel:..."` links. |

---

## 💅 Theming & Styling (CSS)

If you want to change colors, fonts, or spacing, you do **not** need to hunt through the code. 

Go to the top of `index.html` and find the `<style>` block. At the very beginning, you will see the `:root` variables:

```css
:root {
    --navy: #0c2340;       /* Main brand color */
    --accent: #2563eb;     /* Color for icons and highlights */
    --bg-alt: #f8fafc;     /* Background for alternating sections */
    --radius: 16px;        /* How rounded the corners are */
}