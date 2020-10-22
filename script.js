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



// bron van simonevanzeijl.com
// scroll back to top button
//hier pakt hij alle href# dus de Top button
//anchor kijkt hij op welke hoogte op de website is
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) { //klikfunctie
        e.preventDefault(); // de functie van een button zoals verzenden wordt uitgeschakeld
        document.querySelector(this.getAttribute("href")).scrollIntoView({ //functie kan nu scrollen
            behavior: "smooth", //langzaam
        });
    });
});

var top = document.getElementById("top"); //linkje naar toe scrollen bovenaan
var backToTop = document.getElementById("backToTop"); //button waar je op klikt
window.addEventListener("scroll", function (e) { // wordt aangeroepen kijkt hij waar de addeventlistener is, dus href#
    var offsetTop = top.getBoundingClientRect().top; //getbounding is waar die naar toe moet scrollen kijken

    // wordt vanaf bovenaan getelt, onderaan is 25 bijv
    if (offsetTop > -1) { //nu is ie helemaal bovenaan
        backToTop.classList.remove("scrollActive"); //verwijdert hij de class scrollActive
    } else { //onderaan de pagina
        backToTop.classList.add("scrollActive"); //voegt hij de class toe en gaat ie naar boven scrollen
    }
});
