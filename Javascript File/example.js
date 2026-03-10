// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create additional floating elements dynamically
document.addEventListener('DOMContentLoaded', function () {
    const floatingContainer = document.querySelector('.floating-elements');
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;

        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${posY}%`;
        element.style.left = `${posX}%`;
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;

        floatingContainer.appendChild(element);
    }
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function () {
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.image-wrapper, .content-wrapper, .section-header, .card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Initialize animations
    animateOnScroll();

    // Re-run animations when user scrolls back up
    document.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('.image-text-section, .cards-section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // If section is in viewport
            if (scrollPosition > sectionTop - window.innerHeight + 100 &&
                scrollPosition < sectionTop + sectionHeight) {
                const imageWrappers = section.querySelectorAll('.image-wrapper');
                const contentWrappers = section.querySelectorAll('.content-wrapper');
                const cards = section.querySelectorAll('.card');
                const sectionHeader = section.querySelector('.section-header');

                // Add animation class to elements in viewport
                imageWrappers.forEach(wrapper => {
                    if (wrapper.getBoundingClientRect().top < window.innerHeight) {
                        wrapper.classList.add('animate');
                    }
                });

                contentWrappers.forEach(wrapper => {
                    if (wrapper.getBoundingClientRect().top < window.innerHeight) {
                        wrapper.classList.add('animate');
                    }
                });

                cards.forEach(card => {
                    if (card.getBoundingClientRect().top < window.innerHeight) {
                        card.classList.add('animate');
                    }
                });

                if (sectionHeader.getBoundingClientRect().top < window.innerHeight) {
                    sectionHeader.classList.add('animate');
                }
            }
        });
    });
});