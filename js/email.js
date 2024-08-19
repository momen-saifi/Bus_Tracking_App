emailjs.init('b_cVl6wnSOgBdZHA9');

        document.getElementById('submitBtn').addEventListener('click', function(event) {
            event.preventDefault();

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var messageText = document.getElementById('messageText').value;

            if (!name || !email || !messageText) {
                showMessage('All fields are required.', 'error');
                return;
            }

            emailjs.send('service_2nr50d2', 'template_evsxgoc', {
                name: name,
                email: email,
                message: messageText
            })
            .then(function(response) {
                showMessage('Message sent successfully!', 'success');
                document.getElementById('contactForm').reset(); // Clear the form
            }, function(error) {
                showMessage('Failed to send message. Please try again.', 'error');
            });
        });

        function showMessage(message, type) {
            var messageContainer = document.getElementById('message');
            messageContainer.textContent = message;
            messageContainer.className = 'message-container ' + type;
            messageContainer.style.display = 'block';

            // Scroll to the message container
            messageContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Hide the message after 5 seconds
            setTimeout(function() {
                messageContainer.style.display = 'none';
            }, 5000);
        }