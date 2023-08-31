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

document.querySelectorAll('#mySidenav a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    closeNav();
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
            blocs.forEach(b => {
                b.setAttribute('data-expanded', 'false');
                b.style.backgroundColor = '#F3F3F3';
                b.querySelector('.icon').textContent = '-';
                b.querySelector('.description').style.display = 'none';
            });

            bloc.setAttribute('data-expanded', 'true');
            bloc.style.backgroundColor = '#B9FF66';
            bloc.querySelector('.icon').textContent = '+';
            bloc.querySelector('.description').style.display = 'block';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let currentIdx = 0;
    const testimonials = document.querySelectorAll('.testimonial');
  
    function updateTestimonials() {
      testimonials.forEach((t, idx) => {
        t.classList.remove('active');
        if(idx === currentIdx) {
          t.classList.add('active');
        }
      });
    }
  
    updateTestimonials();
  
    setInterval(() => {
      currentIdx = (currentIdx + 1) % testimonials.length;
      updateTestimonials();
    }, 5000);
  
    document.getElementById('prev').addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
      updateTestimonials();
    });
  
    document.getElementById('next').addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % testimonials.length;
      updateTestimonials();
    });
  });
  