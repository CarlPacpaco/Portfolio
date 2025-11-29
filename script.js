// Portfolio JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initScrollEffects();
    initSmoothScrolling();
    initContactForm();
    initSkillAnimations();
    initScrollAnimations();
    initParticles();
    initTypingAnimation();
});

// Enhanced Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu function
    function toggleMobileMenu() {
        const isActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', !isActive);
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (!isActive) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            
            // Focus management
            const firstNavLink = navMenu.querySelector('.nav-link');
            if (firstNavLink) firstNavLink.focus();
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }

    // Click event
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Keyboard event for accessibility
    hamburger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });

    // Close mobile menu function
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMobileMenu();
            hamburger.focus();
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Touch swipe to close menu (mobile gesture)
    let touchStartY = 0;
    navMenu.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    navMenu.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;
        
        // Close menu if swiped up significantly
        if (swipeDistance > 100) {
            closeMobileMenu();
        }
    });
}

// Scroll Effects for Navbar
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        // Add scrolled class to navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Handle navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const targetOffset = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle scroll indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const targetOffset = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Handle CTA buttons
    const ctaButtons = document.querySelectorAll('.btn[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const targetOffset = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:contact.carlpacpaco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Email client opened! Thank you for your message.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#667eea'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Skill Bar Animations
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Animate on scroll
    let isAnimating = false;
    window.addEventListener('scroll', () => {
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(() => {
                animateSkillBars();
                isAnimating = false;
            });
        }
    });
}

// Scroll Animations for Elements
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .stat-card, .about-highlights .highlight-item');
    
    // Add animation classes
    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    const checkVisibility = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    checkVisibility();
    
    // Check on scroll
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                checkVisibility();
                isScrolling = false;
            });
        }
    });
}

// Utility Functions
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function(...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(() => {
    // Handle scroll-dependent animations here if needed
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Enhanced Loading and Image Optimization
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Remove loading spinner if exists
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) spinner.remove();
    
    // Lazy load and optimize images
    const profileImage = document.querySelector('.hero-avatar img');
    if (profileImage) {
        profileImage.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (cached)
        if (profileImage.complete) {
            profileImage.classList.add('loaded');
        }
    }
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-social');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
});

// Add intersection observer for better performance
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.timeline-item, .skill-category, .education-card').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for intersection observer animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Particle System
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (4-8 seconds)
        const duration = Math.random() * 4 + 4;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Random size variation
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + 2) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 100);
    }
    
    // Continuously create particles
    setInterval(createParticle, 200);
}


// Typing Animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.getAttribute('data-text');
    const speed = 100; // Typing speed in milliseconds
    let i = 0;
    
    typingElement.textContent = '';
    typingElement.classList.add('typing');
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Remove typing class to stop blinking cursor
            setTimeout(() => {
                typingElement.classList.remove('typing');
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Enhanced Scroll Reveal Animations
function initEnhancedAnimations() {
    const elements = document.querySelectorAll('.stat-card, .skill-category, .education-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
}

// Progress Counter Animation
function initProgressCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = current.toFixed(current % 1 === 0 ? 0 : 2);
                    
                    // Add '+' for certain numbers
                    if (counter.textContent.includes('500') || counter.textContent.includes('100')) {
                        counter.textContent += '+';
                    }
                }, 20);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}


// Initialize enhanced animations on load
window.addEventListener('load', () => {
    initEnhancedAnimations();
    initProgressCounters();
});

// Console welcome message
console.log(`
🎉 Welcome to Carl Vincent V. Pacpaco's Portfolio!
📧 Contact: contact.carlpacpaco@gmail.com
📱 Phone: +63 999 490 0847
📍 Location: Vigan City, Ilocos Sur, Philippines
🎓 Licensed Psychometrician (RPm)

✨ Features:
✨ Floating Particles Background
⌨️ Typing Animation
🎨 Enhanced Visual Effects
📱 Mobile Responsive Design

Portfolio designed and developed with ❤️
`);