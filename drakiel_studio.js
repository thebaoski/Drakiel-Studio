document.addEventListener('DOMContentLoaded', function() {
    const miniHeader = document.getElementById('mini-header-mobile');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav-overlay');

    // 1. Płynne pojawianie się mini-headera przy scrollu
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 768) {
            if (window.scrollY > 80) {
                miniHeader.classList.add('pokaz');
            } else {
                miniHeader.classList.remove('pokaz');
            }
        }
    });

    // 2. Obsługa kliknięcia w dwie kreski (Otwieranie menu)
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('open');
            mobileNav.classList.toggle('active');
            
            // Blokada scrollowania strony, gdy menu jest otwarte
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // 3. Zamykanie menu po kliknięciu w dowolny link
    const navLinks = document.querySelectorAll('.mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});