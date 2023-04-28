const nav = document.querySelector("nav.menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});