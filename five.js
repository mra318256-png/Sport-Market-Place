     document.addEventListener('DOMContentLoaded', () => {
            const stars = document.querySelectorAll('.star-rating span');
            const ratingInput = document.getElementById('ratingValue');
            const ratingError = document.getElementById('ratingError');

            stars.forEach(star => {
                star.addEventListener('click', function() {
                    stars.forEach(s => s.classList.remove('active'));
                    this.classList.add('active');
                    ratingInput.value = this.getAttribute('data-value');
                    ratingError.classList.add('d-none');
                });
            });

            document.getElementById('reviewForm').addEventListener('submit', function(event) {
                event.preventDefault();
                if (!ratingInput.value) {
                    ratingError.classList.remove('d-none');
                    return;
                }
                alert("Thank you for your feedback! Your review has been submitted successfully. ⭐");
                this.reset();
                stars.forEach(s => s.classList.remove('active'));
                ratingInput.value = '';
                window.location.href ='two.html'
            });
        });