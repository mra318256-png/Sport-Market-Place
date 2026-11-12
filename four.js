 document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Payment Successful! Thank you for shopping with Amricy Sport.');
        window.location.href = 'five.html';
    });