const backToTop = document.querySelector("#back-to-top");
const yearSpan = document.getElementById("year");

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", toggleBackToTop);
backToTop.addEventListener("click", scrollToTop);

yearSpan.textContent = new Date().getFullYear();

toggleBackToTop();
