// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling with validation feedback
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitButton = this.querySelector('.submit-button');

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Re-enable after submission (FormSubmit handles the redirect)
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Sent!';
        }, 2000);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.service-card, .partner-card, .form-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to forms on focus
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('active');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('active');
    });
});

// Star rating interaction feedback
document.querySelectorAll('.star-rating input').forEach(radio => {
    radio.addEventListener('change', function() {
        // Visual feedback when rating is selected
        this.nextElementSibling.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.nextElementSibling.style.transform = 'scale(1)';
        }, 200);
    });
});

// Scroll to top functionality
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 500) {
            if (!document.querySelector('.scroll-top')) {
                addScrollTopButton();
            }
        } else {
            const scrollTop = document.querySelector('.scroll-top');
            if (scrollTop) {
                scrollTop.remove();
            }
        }
    }, 100);
});

function addScrollTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-top';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-orange), var(--primary-blue));
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });

    document.body.appendChild(button);
}

// Console message for developers
console.log('%c🌾 Rural Tech Store', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%cEmpowering Rural India Digitally', 'color: #2563EB; font-size: 14px;');
console.log('%c© 2025 Rural Tech Store', 'color: #6B7280; font-size: 12px;');
