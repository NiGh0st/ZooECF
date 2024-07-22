(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

(function($) {
    // Votre code jQuery ici
})(jQuery);

function filterAnimals() {
    const filter = document.getElementById('habitat-filter').value;
    const cards = document.querySelectorAll('.animal-card');

    cards.forEach(card => {
        if (filter === 'all' || card.dataset.habitat === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(element) {
    var modal = document.getElementById("animalModal");
    document.getElementById("modal-name").textContent = element.dataset.name;
    document.getElementById("modal-habitat").textContent = element.dataset.habitat;
    document.getElementById("modal-race").textContent = element.dataset.race;
    document.getElementById("modal-description").textContent = element.dataset.description;
    document.getElementById("modal-alimentation").textContent = element.dataset.alimentation;
    document.getElementById("modal-etat").textContent = element.dataset.etat;
    document.getElementById("modal-passage").textContent = element.dataset.passage;
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("animalModal");
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("animalModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }

    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    
}

function openListe(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeListe(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}


function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Connexion réussie!');
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.hide();
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
}
