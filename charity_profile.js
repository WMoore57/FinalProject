document.addEventListener("DOMContentLoaded", function() {
    const volunteerButton = document.querySelector("input[type='submit']");
    volunteerButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const formDiv = document.createElement("div");
        formDiv.innerHTML = `
            <h2>Volunteer Information</h2>
            <form id="volunteerForm" action="#" method="post">
                <label for="fullname">Full Name:</label><br>
                <input type="text" id="fullname" name="fullname" required><br><br>
                
                <label for="phone">Phone Number:</label><br>
                <input type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890"><br><br>
                
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                
                <input type="submit" value="Submit">
            </form>
        `;
        
        const mainSection = document.querySelector("main");
        mainSection.appendChild(formDiv);

        volunteerButton.style.display = "none";
        
        const volunteerForm = document.getElementById("volunteerForm");
        volunteerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            // You can add code here to handle form submission, e.g., sending data to server
            alert("Thank you for volunteering!");
        });
    });
    
    const additionalElement = document.createElement("p");
    additionalElement.textContent = "We appreciate your willingness to volunteer.";
    const mainSection = document.querySelector("main");
    mainSection.appendChild(additionalElement);
});
