// navigatie mobiel uitklappen papiertje
function openMenu() {
  document.getElementById("mobile-menu").style.top = "0%"; // pakt de id uit html, die staat nu op 0% dus het papiertje ligt over de body
}

function closeMenu() {
  document.getElementById("mobile-menu").style.top = "-100%"; //papiertje is nu boven de body
}

//onclickevent
document.getElementById("open-button").addEventListener("click", openMenu); // bij klik gaat het papiertje naar 0 dus over de body
document.getElementById("close-button").addEventListener("click", closeMenu); // bij klik op het kruisje gaat papiertje weer naar 100 dus boven de body

//button waar je op klikt
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", scrollToTop);

// Functie zodat hij smooth naar boven scrollt
function scrollToTop() {
  window.scrollTo(0, 0);

  window.scrollTo({
    top: 1,
    behavior: "smooth",
  });
}
