document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  emailjs.sendForm("service_91cub5a", "template_1fr7eb3", this)
    .then(function(response) {
      document.getElementById("thankYouMessage").style.display = "block"; // Show success message
      document.getElementById("contactForm").reset(); // Clear form
    }, function(error) {
      alert("Error sending email! Please try again.");
    });
});

document.getElementById("newMessageBtn").addEventListener("click", function() {
  document.getElementById("thankYouMessage").style.display = "none"; // Hide message
});