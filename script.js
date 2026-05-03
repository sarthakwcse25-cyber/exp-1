document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();
            reservationForm.reset();
        });
    }
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        emailjs.init("YOUR_PUBLIC_KEY");
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(function () {
                const modal = new bootstrap.Modal(document.getElementById('successModal'));
                modal.show();
                contactForm.reset();
            })
            .catch(function (error) {
                alert("❌ Failed to send message");
                console.log(error);
            });
        });
    }

});
