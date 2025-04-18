// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Typing animation
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const roles = typingElement.getAttribute('data-rotate').split(', ');
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 200;
        let erasingDelay = 100;
        let newTextDelay = 2000; // Delay after typing a word
        
        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Remove a character
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                // Add a character
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 200;
            }
            
            // If word is complete
            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at end of word
                typingDelay = newTextDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next word
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingDelay = 500;
            }
            
            setTimeout(type, typingDelay);
        }
        
        // Start the typing animation
        setTimeout(type, newTextDelay);
    }
    
    // Sticky header
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }
});

// Form validation for contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            
            // Simple validation
            let isValid = true;
            
            if (nameField.value.trim() === '') {
                showError(nameField, 'Name is required');
                isValid = false;
            } else {
                removeError(nameField);
            }
            
            if (emailField.value.trim() === '') {
                showError(emailField, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailField.value)) {
                showError(emailField, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(emailField);
            }
            
            if (subjectField.value.trim() === '') {
                showError(subjectField, 'Subject is required');
                isValid = false;
            } else {
                removeError(subjectField);
            }
            
            if (messageField.value.trim() === '') {
                showError(messageField, 'Message is required');
                isValid = false;
            } else {
                removeError(messageField);
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For this example, we'll just show a success message
                const formContainer = document.querySelector('.form-container');
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon.</p>
                `;
                
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('small');
        
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
        
        formControl.className = 'form-control error';
    }
    
    function removeError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        formControl.className = 'form-control';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

// Portfolio filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Show/hide portfolio items based on filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            item.classList.add('show');
                        }, 100);
                    } else {
                        item.classList.remove('show');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
