document.addEventListener("DOMContentLoaded", function() {
            var volunteerButton = document.getElementById("volunteerButton");
            var volunteerForm = document.getElementById("volunteerForm");

            volunteerButton.addEventListener("click", function(event) {
                event.preventDefault();
                volunteerForm.style.display = "block";
            });
        });
