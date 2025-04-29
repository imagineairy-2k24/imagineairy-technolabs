// Custom animations for the website
document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.5s ease-in-out';
    });

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // Service card animations
    const animateServiceCards = () => {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            card.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
        });
    };

    // Statistics counter animation
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            let count = 0;
            const speed = 2000 / target;
            
            const updateCount = () => {
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, speed);
                }
            };
            
            updateCount();
        });
    };

    // Hero section parallax effect
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }

    // Smooth reveal for team member cards
    const revealTeamMembers = () => {
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach((member, index) => {
            member.style.animation = `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`;
        });
    };

    // Add CSS keyframes for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations
    const initAnimations = () => {
        animateServiceCards();
        animateCounters();
        revealTeamMembers();
    };

    // Run animations when elements are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('services-section')) {
                    animateServiceCards();
                } else if (entry.target.classList.contains('stats-section')) {
                    animateCounters();
                } else if (entry.target.classList.contains('team-section')) {
                    revealTeamMembers();
                }
            }
        });
    }, { threshold: 0.2 });

    // Observe sections
    const sections = document.querySelectorAll('.services-section, .stats-section, .team-section');
    sections.forEach(section => observer.observe(section));

    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Initialize all animations
    initAnimations();
});
