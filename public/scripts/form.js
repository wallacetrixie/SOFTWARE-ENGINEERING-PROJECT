document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Elements
    const registrationForm = document.getElementById("registration-form");

    // Progress Bar
    const progressBar = document.getElementById("progress-bar");

    // Form Fields
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone-number");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const country = document.getElementById("country");

    // Submit Button
    const submitButton = document.getElementById("submit-button");

    // Form Submit Event
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate form fields
        if (validateForm()) {
            const formData = {
                first_name: firstName.value,
                last_name: lastName.value,
                email: email.value,
                phone_number: phoneNumber.value,
                title: title.value,
                description: description.value,
                name: country.value
            };

            // Send form data to server
            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error submitting data to the server');
                }
            })
            .then(data => {
                console.log('Success:', data);
                alert('Data submitted successfully!');
                registrationForm.reset(); // Reset form fields
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error submitting data to the server');
            });
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });

    // Update Progress Bar Function
    function updateProgressBar() {
        const totalFields = 7; // Total number of fields in the form
        const filledFields = countFilledFields();
        const progress = (filledFields / totalFields) * 100;
        progressBar.style.width = progress + '%';
        if (progress === 100) {
            progressBar.style.backgroundColor = "#007bff"; // Change progress bar color to blue when all fields are filled
        } else {
            progressBar.style.backgroundColor = "#28a745"; // Default color
        }
    }

    // Count Filled Fields Function
    function countFilledFields() {
        let count = 0;
        const inputs = registrationForm.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea, select");
        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                count++;
            }
        });
        return count;
    }

    // Validate Form Function
    function validateForm() {
        const inputs = registrationForm.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea, select");
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // Initial Progress Bar Update
    updateProgressBar();
});
