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

    // 4. Form Submission Mockup
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = inquiryForm.querySelector('.form-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '신청 중...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                inquiryForm.reset();
            }, 1500);
        });
    }

    // 5. Hero Activation after load
    setTimeout(() => {
        document.querySelector('.hero').classList.add('active');
    }, 100);
});
