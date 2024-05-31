/* Menu */

const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const navLinks = document.querySelector(".nav__links");

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
  }
});

hamburger.addEventListener("click", () => {
  header.classList.toggle("open");
  body.classList.toggle("no-scroll");
});

/* Language Switcher */

const currentLanguageNode = document.querySelector(".language-switcher__label.active");
const currentLanguageLink = currentLanguageNode.querySelector("a");
const currentLanguageText = currentLanguageLink.innerText;

currentLanguageLink.remove();
currentLanguageNode.innerText = currentLanguageText;
