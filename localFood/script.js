document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
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
    