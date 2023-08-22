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

document.addEventListener('DOMContentLoaded', () => {
    const blocs = document.querySelectorAll('.working__bloc');

    blocs.forEach(bloc => {
        bloc.addEventListener('click', () => {
            // Réinitialiser tous les blocs
            blocs.forEach(b => {
                b.setAttribute('data-expanded', 'false');
                b.style.backgroundColor = '#F3F3F3'; // Réinitialiser la couleur de fond
                b.querySelector('.icon').textContent = '-';
                b.querySelector('.description').style.display = 'none'; // Cacher le lorem ipsum
            });

            // Mettre à jour le bloc cliqué
            bloc.setAttribute('data-expanded', 'true');
            bloc.style.backgroundColor = '#B9FF66'; // Changer la couleur de fond
            bloc.querySelector('.icon').textContent = '+';
            bloc.querySelector('.description').style.display = 'block'; // Montrer le lorem ipsum
        });
    });
});
