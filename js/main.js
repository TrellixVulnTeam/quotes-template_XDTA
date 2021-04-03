const navMenu = document.getElementById("nav-menu");
const navContent = document.getElementById("nav-content");

navMenu.addEventListener("click", function() {
    navMenu.classList.toggle("open");

    if(navMenu.innerHTML === "MENU"){
        navMenu.innerHTML = "CLOSE"
    } else{
        navMenu.innerHTML = "MENU"
    }

    navContent.classList.toggle("open")
}) 

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        mouseDrag: false
    })
})

$(document).ready(function() {
    $('#testimonials').owlCarousel({
        items: 1,
        dots: true,
        mouseDrag: false
    })
})