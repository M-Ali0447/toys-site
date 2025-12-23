// Simple animations on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.product-card, .category-card, .testimonial-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 1s ease forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Add floating animation to elements with the float class
            const floatElements = document.querySelectorAll('.float');
            floatElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
            });
        });