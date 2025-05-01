document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = '#dc3545';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#dc3545';
                return;
            }
            
            // Simulate form submission
            formMessage.textContent = 'Sending message...';
            formMessage.style.color = '#666';
            
            setTimeout(function() {
                formMessage.textContent = 'Your message has been sent successfully!';
                formMessage.style.color = '#28a745';
                contactForm.reset();
            }, 1500);
        });
    }
});