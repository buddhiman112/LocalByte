document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    // Function to animate counter numbers
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let count = 0; // Start from 0

        const increment = target / 200; // Controls the speed of the animation
        const updateCounter = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count) + "";
                requestAnimationFrame(updateCounter); // Smooth animation
            } else {
                counter.innerText = target + ""; // Final value
            }
        };

        updateCounter();
    };

    // Check if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target); // Start counter animation
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { root: null, threshold: 0.5 }); // Trigger when 50% visible

        // Observe each counter element
        counters.forEach(counter => observer.observe(counter));
    } else {
        // Fallback: Animate all counters immediately
        counters.forEach(counter => animateCounter(counter));
    }
});

//for scrollable feature 

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.features-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    // Scroll Left Function
    scrollLeftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -300, // Scroll amount
            behavior: 'smooth'
        });
    });

    // Scroll Right Function
    scrollRightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: 300, // Scroll amount
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.features-container');
    let scrollAmount = 1; // Speed of scrolling

    function autoScroll() {
        container.scrollLeft += scrollAmount; // Scroll the container to the right

        // Reset scroll position to create an infinite loop
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        }
    }

    // Start automatic scrolling
    let scrollInterval = setInterval(autoScroll, 20); // Adjust interval for smoothness

    // Optional: Pause on hover
    container.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval); // Stop scrolling when hovered
    });

    container.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(autoScroll, 20); // Resume scrolling when mouse leaves
    });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Prevent clicks inside the menu from closing it
navMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});
// Mobile menu toggle functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const headerRight = document.querySelector('.header-right');

mobileMenuBtn.addEventListener('click', () => {
    headerRight.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!headerRight.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        headerRight.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        headerRight.classList.remove('active');
    });
});



