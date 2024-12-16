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


// Select all counters
// Select all counters
const counters = document.querySelectorAll('.counter');

// Observer to trigger animations when visible on screen
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% visible

// Observe each counter
counters.forEach(counter => observer.observe(counter));

// Function to animate counter
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target'); // Target number
    let start = 0; // Initial value
    const duration = 2000; // Total animation duration in ms
    const step = target / duration * 10; // Calculate step for smooth increment

    const updateCounter = () => {
        start += step;
        if (start < target) {
            counter.innerText = Math.ceil(start) + "+"; // Add "+" to the number
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + "+"; // Final value with "+"
        }
    };

    updateCounter();
}

document.querySelector('.submit-review').addEventListener('click', () => {
    const reviewText = document.querySelector('textarea').value.trim();
    if (reviewText) {
        alert('Thank you for your review!');
        document.querySelector('textarea').value = ''; // Clear the input
    } else {
        alert('Please write a review before submitting.');
    }
});

document.getElementById("year").innerText = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in copyright
    document.getElementById('year').textContent = new Date().getFullYear();

    // Animate footer elements on scroll
    const footerElements = document.querySelectorAll('.footer-column, .social-icons, .copyright');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    footerElements.forEach(el => observer.observe(el));

    // Submit button animation
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.95)';
    });
    submitBtn.addEventListener('mouseup', function () {
        this.style.transform = 'scale(1)';
    });

    // Textarea auto-resize
    const textarea = document.getElementById('comment');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});