fetch('../menu.html')
.then(response => response.text())
.then(data => {
  document.getElementById('menu-placeholder').innerHTML = data;

  const lang = document.body.classList.contains("b_on") ? "en" : "es";
  document.querySelectorAll("[data-lang]").forEach(el => {
      el.innerText = translations[lang][el.getAttribute("data-lang")];
  });

  document.querySelector("#buttonIdioma").addEventListener("click", () => {
    document.querySelector("#buttonIdioma").classList.toggle("on");
    document.querySelector(".circle").classList.toggle("c_on");
    document.body.classList.toggle("b_on");

    const lang = document.body.classList.contains("b_on") ? "en" : "es";
    document.querySelectorAll("[data-lang]").forEach(el => {
      el.innerText = translations[lang][el.getAttribute("data-lang")];
    });
  })
  .catch(error => console.error('Error al cargar el menú:', error));

  document.addEventListener("DOMContentLoaded", () => {
    const lang = "es";
    document.querySelectorAll("[data-lang]").forEach(el => {
      el.innerText = translations[lang][el.getAttribute("data-lang")];
      el.setAttribute("data-lang-en", translations["en"][el.getAttribute("data-lang")]);
    });
  });

});







document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const textOverlays = document.querySelectorAll('.video-text');

    video.addEventListener('timeupdate', function () {
        const currentTime = video.currentTime;

        textOverlays.forEach(function (overlay) {
            const start = parseFloat(overlay.getAttribute('data-start'));
            const end = parseFloat(overlay.getAttribute('data-end'));

            if (currentTime >= start && currentTime <= end) {
                overlay.style.opacity = '1';
            } else {
                overlay.style.opacity = '0';
            }
        });
    });
});

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
            $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
        }
    });
    
    
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


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('status').textContent = 'Mensaje enviado correctamente';
        form.reset();
    })
    .catch(error => {
        document.getElementById('status').textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
    });
});

