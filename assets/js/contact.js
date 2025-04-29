document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = submitBtn.querySelector('.button-text');
    const spinner = submitBtn.querySelector('.spinner-border');
    const formMessage = document.getElementById('form-message');

    // Form validation and submission
    form.addEventListener('submit', function(e) {
        // Check if the form is valid
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Check honeypot field
        if (document.getElementById('honeypot').value) {
            e.preventDefault();
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        buttonText.classList.add('d-none');
        spinner.classList.remove('d-none');

        // The form will be submitted automatically to FormSubmit
        // We don't need to handle the submission manually
        
        // Show a temporary success message before redirect
        showMessage('Sending your message...', 'info');
    });

    // Helper function to show messages
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `alert alert-${type}`;
        formMessage.classList.remove('d-none');
    }
}); 