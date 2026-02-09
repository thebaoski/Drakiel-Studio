document.addEventListener('DOMContentLoaded', function() {
    const miniHeader = document.getElementById('mini-header-mobile');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // 1. POJAWIANIE SIĘ MINI-HEADERA PRZY SKROLOWANIU
    window.addEventListener('scroll', function() {
        if (window.innerWidth <= 850) { // Dopasowane do Twojego media query
            if (window.scrollY > 80) {
                miniHeader.classList.add('pokaz');
            } else {
                miniHeader.classList.remove('pokaz');
            }
        }
    });

    // 2. OBSŁUGA OTWIERANIA I ZAMYKANIA (TOGGLE)
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            // Toggle dodaje klasę jeśli jej nie ma, lub usuwa jeśli jest
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

    // 3. ZAMYKANIE MENU PO KLIKNIĘCIU W LINK
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});