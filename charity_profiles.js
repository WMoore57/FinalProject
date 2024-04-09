document.addEventListener("DOMContentLoaded", function() {
    var volunteerButtons = document.querySelectorAll(".volunteer-button");

    volunteerButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var form = button.nextElementSibling;
            form.style.display = "block";
        });
    });
});
