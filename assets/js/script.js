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
