document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const globalNav = document.querySelector('.global-nav');

    if (hamburger && globalNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            globalNav.classList.toggle('is-active');
        });

        // Close menu when clicking a link
        const navLinks = globalNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                globalNav.classList.remove('is-active');
            });
        });
    }

    const header = document.querySelector('.header');
    if (header) {
        const isAlwaysSolid = header.classList.contains('solid');
        if (!isAlwaysSolid) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('solid');
                } else {
                    header.classList.remove('solid');
                }
            });
        }
    }
});
