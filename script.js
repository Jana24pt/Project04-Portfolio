// Back-to-top button + footer year
const backToTop = document.querySelector("#back-to-top");
const yearSpan = document.getElementById("year");

// show the button only after scrolling down a bit
function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

// scroll smoothly to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", toggleBackToTop);
backToTop.addEventListener("click", scrollToTop);

// keep the footer year up to date automatically
yearSpan.textContent = new Date().getFullYear();

toggleBackToTop();
