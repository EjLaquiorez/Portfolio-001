/**
 * PORTFOLIO — JavaScript starter
 *
 * You do NOT need JavaScript to finish v1 of your portfolio.
 * HTML + CSS alone is enough. Add JS when you want interactivity.
 *
 * HOW TO TEST
 * 1. Uncomment ONE section below at a time.
 * 2. Save this file, refresh index.html in the browser.
 * 3. Open DevTools (F12) → Console to see console.log messages.
 *
 * LEARNING ORDER (suggested)
 * 1. console.log and querySelector
 * 2. Click events (e.g. mobile menu button — add button in HTML first)
 * 3. Smooth scroll or highlight active nav link
 * 4. Optional: fetch() later when you learn APIs (not needed for this project)
 */

// Wait until the HTML is fully loaded before running your code
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded — edit js/main.js to add behavior.");

  /* --------------------------------------------
     EXAMPLE 1: Select an element
     Uncomment to try:

  const aboutSection = document.querySelector("#about");
  console.log(aboutSection);
  -------------------------------------------- */

  /* --------------------------------------------
     EXAMPLE 2: Mobile menu toggle
     Steps:
     1. In index.html, add a <button id="menu-toggle" aria-label="Open menu">Menu</button>
     2. Give <nav> an id="main-nav"
     3. Uncomment this block and style .nav-open in CSS

  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
  -------------------------------------------- */

  /* --------------------------------------------
     EXAMPLE 3: Highlight nav link for current section
     (Intermediate — try after you finish HTML/CSS)
     Uses Intersection Observer — search MDN to learn more.
  -------------------------------------------- */
});
