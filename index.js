document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 3. Hero Parallax Effect
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (heroBg && window.innerWidth > 768) {
            heroBg.style.transform = `translateY(${offset * 0.4}px) scale(1)`;
        }
    });

    // 4. Form Submission Mockup (Removed)


    // 5. Hero Activation after load
    setTimeout(() => {
        document.querySelector('.hero').classList.add('active');
    }, 100);
});
