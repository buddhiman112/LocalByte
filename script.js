document.addEventListener('DOMContentLoaded', () => {
    // Image slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function goToSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides
    setInterval(nextSlide, 5000);

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Navbar animation
    gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Slider content animation
    gsap.from('.slide-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Info boxes animation
    gsap.from('.info-box', {
        scrollTrigger: {
            trigger: '.info-container',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-us', {
        scrollTrigger: {
            trigger: '.about-us',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});