document.addEventListener('DOMContentLoaded', () => {
    // Lógica para animação de scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // Lógica do menu mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
    };

    menuBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Lógica do Botão Voltar ao Topo
    const toTopButton = document.getElementById('to-top-button');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            toTopButton.classList.remove('hidden');
        } else {
            toTopButton.classList.add('hidden');
        }
    });

    toTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

