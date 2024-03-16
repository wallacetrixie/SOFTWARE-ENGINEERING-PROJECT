document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Elements
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    // Progress Bars
    const progressBar1 = document.getElementById("progress-bar1");
    const progressBar2 = document.getElementById("progress-bar2");
    const progressBar3 = document.getElementById("progress-bar3");

    // Navigation Buttons
    const nextButton1 = document.getElementById("next-button1");
    const prevButton2 = document.getElementById("prev-button2");
    const nextButton2 = document.getElementById("next-button2");
    const prevButton3 = document.getElementById("prev-button3");
    const submitButton = document.getElementById("submit-button");

    // Form 1 Fields
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm-password");

    // Form 2 Fields
    const first_name = document.getElementById("first-name");
    const last_name = document.getElementById("last-name");
    const age = document.getElementById("age");
    const dob = document.getElementById("dob");
    const profile_image1 = document.getElementById("profile-image1");

    // Form 3 Fields
    const country = document.getElementById("country");
    const phone_number = document.getElementById("phone-number");
    const city = document.getElementById("city");
    const education = document.getElementById("education");

    // Form 1 Next Button Click Event
    nextButton1.addEventListener("click", function () {
        if (validateForm(form1)) {
            form1.classList.add("hidden");
            form2.classList.remove("hidden");
            updateProgressBar(progressBar1, totalFields1, countFilledFields(form1));
        } else {
            alert("Please fill in all fields before proceeding.");
        }
    });

    // Form 2 Previous Button Click Event
    prevButton2.addEventListener("click", function () {
        form2.classList.add("hidden");
        form1.classList.remove("hidden");
        updateProgressBar(progressBar1, totalFields1, countFilledFields(form1));
    });

    // Form 2 Next Button Click Event
    nextButton2.addEventListener("click", function () {
        if (validateForm(form2)) {
            form2.classList.add("hidden");
            form3.classList.remove("hidden");
            updateProgressBar(progressBar2, totalFields2, countFilledFields(form2));
        } else {
            alert("Please fill in all fields before proceeding.");
        }
    });

    // Form 3 Previous Button Click Event
    prevButton3.addEventListener("click", function () {
        form3.classList.add("hidden");
        form2.classList.remove("hidden");
        updateProgressBar(progressBar2, totalFields2, countFilledFields(form2));
    });

    // Form 3 Submit Button Click Event
 // Form 3 Submit Button Click Event
form3.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (validateForm(form3)) {
        const formData = {
            username: username.value,
            email: email.value,
            password: password.value,
            confirm_password: confirm_password.value,
            first_name: first_name.value,
            last_name: last_name.value,
            age: age.value,
            dob: dob.value,
            country: country.value,
            phone_number: phone_number.value,
            city: city.value,
            education: education.value
        };

        // Send form data to server
        fetch('/register', {
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
            alert('User registered successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error registering user');
        });
    } else {
        alert("Please fill in all fields before submitting.");
    }
});


    // Update Progress Bar Function
    function updateProgressBar(progressBar, totalFields, filledFields) {
        const progress = (filledFields / totalFields) * 100;
        progressBar.style.width = progress + '%';
        if (progress === 100) {
            progressBar.style.backgroundColor = "#007bff"; // Change progress bar color to blue when all fields are filled
        } else {
            progressBar.style.backgroundColor = "#28a745"; // Default color
        }
    }

    // Count Filled Fields Function
    function countFilledFields(form) {
        let count = 0;
        const inputs = form.querySelectorAll("input[type='text'], input[type='number'], input[type='file'], select");
        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                count++;
            }
        });
        return count;
    }

    // Validate Form Function
    function validateForm(form) {
        const inputs = form.querySelectorAll("input[type='text'], input[type='number'], input[type='file'], select");
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // Total Fields for each form
    const totalFields1 = 4; // Total fields in Form 1
    const totalFields2 = 5; // Total fields in Form 2
    const totalFields3 = 4; // Total fields in Form 3

    // Initially update progress bars
    updateProgressBar(progressBar1, totalFields1, 0);
    updateProgressBar(progressBar2, totalFields2, 0);
    updateProgressBar(progressBar3, totalFields3, 0);
});
