document.addEventListener("DOMContentLoaded", function() {
    const volunteerButton = document.getElementById("volunteerButton");
    const contactForm = document.getElementById("contactForm");
    const mainSection = document.querySelector("main");

    volunteerButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const volunteerFormHTML = `
            <h2>Volunteer Information</h2>
            <form id="volunteerForm" action="#" method="post">
                <label for="fullname">Full Name:</label><br>
                <input type="text" id="volunteerFullName" name="fullname" required><br><br>
                
                <label for="phone">Phone Number:</label><br>
                <input type="tel" id="volunteerPhone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890"><br><br>
                
                <label for="email">Email:</label><br>
                <input type="email" id="volunteerEmail" name="email" required><br><br>
                
                <input type="submit" value="Submit">
            </form>
        `;
        
        const formDiv = document.createElement("div");
        formDiv.innerHTML = volunteerFormHTML;
        mainSection.appendChild(formDiv);

        volunteerButton.style.display = "none";

        const volunteerForm = document.getElementById("volunteerForm");
        volunteerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            const volunteerFullName = document.getElementById("volunteerFullName").value;
            const volunteerPhone = document.getElementById("volunteerPhone").value;
            const volunteerEmail = document.getElementById("volunteerEmail").value;
           
            alert(`Thank you ${volunteerFullName} for volunteering!`);
        });
    });
    
    const additionalElement = document.createElement("p");
    additionalElement.textContent = "We appreciate your willingness to volunteer.";
    mainSection.appendChild(additionalElement);
});
