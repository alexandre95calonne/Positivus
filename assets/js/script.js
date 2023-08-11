var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', function(event) {
    console.log('cc tmr')
    openNav()
});

closeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    closeNav();
});

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}

document.addEventListener('click', function(event) {
    var isActive = sidenav.classList.contains("active");
    var isClickInsideSidenav = sidenav.contains(event.target);
    var isClickOnBurger = openBtn.contains(event.target);

    if (isActive && !isClickInsideSidenav && !isClickOnBurger) {
        closeNav();
    }
});

const myInput = document.getElementById("myInput");

myInput.addEventListener('focus', function() {
    this.setAttribute('placeholder', '');
});

myInput.addEventListener('blur', function() {
    if(this.value === '') {
        this.setAttribute('placeholder', 'Email');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});
