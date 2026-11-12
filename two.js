
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('supportForm').addEventListener('submit', function(event) {
                event.preventDefault();
                alert("Thank you! Your message has been sent to our support team. We will reply soon. 🎧");
                this.reset();
            });
        });