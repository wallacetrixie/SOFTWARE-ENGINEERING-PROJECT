 const createPostBtn = document.getElementById('createPostBtn');
        const nameInput = document.getElementById('nameInput');
        const titleInput = document.getElementById('titleInput');
        const descriptionInput = document.getElementById('descriptionInput');
        const amountInput = document.getElementById('amountInput');
        const popupSuccess = document.getElementById('popup-success');
        const popupWarning = document.getElementById('popup-warning');
        createPostBtn.addEventListener('click', function () {
            // Check if all input fields are filled
            if (nameInput.value.trim() === '' || titleInput.value.trim() === '' || descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
                alert('Please fill in all fields before creating a post.');
            } else {
                popupSuccess.style.display = 'block';
                setTimeout(function () {
                    popupSuccess.style.display = 'none';
                    setTimeout(function () {
                        popupWarning.style.display = 'block';
                        setTimeout(function () {
                            popupWarning.style.display = 'none';
                        }, 7000);
                    }, 7000); // Adjust the delay as needed
                }, 7000);
            }
        });
document.getElementById("About").style.display = "none";

document.getElementById("toggleAbout").addEventListener("click", function() {
    var aboutSection = document.getElementById("About");
    aboutSection.style.display = aboutSection.style.display === "none" ? "block" : "none";
});
  document.addEventListener('DOMContentLoaded', function() {
        // Get all the like buttons
        const likeButtons = document.querySelectorAll('.Btn');

        // Add click event listener to each like button
        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Find the like count element inside the clicked button
                const likeCountElement = button.querySelector('.likeCount');

                // Get the current like count
                let currentCount = parseInt(likeCountElement.textContent.replace(/,/g, ''), 10);

                // Increment the like count
                currentCount++;

                // Update the like count element
                likeCountElement.textContent = currentCount.toLocaleString();
            });
        });
  });
const choices = document.querySelectorAll('.choice');
const components = document.querySelectorAll('.component-item');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const selectedChoice = choice.id;
    components.forEach(component => {
      if (component.classList.contains(selectedChoice)) {
        component.classList.remove('hide');
      } else {
        component.classList.add('hide');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var groups = document.querySelectorAll('.groups');
    var dropdowns = document.querySelectorAll('.dropdown-content');

    // Add mouseenter event listeners to all group links
    groups.forEach(function(group, index) {
        group.addEventListener('mouseenter', function() {
            // Hide all dropdowns except the one associated with the hovered group
            dropdowns.forEach(function(dropdown, idx) {
                if (idx !== index) {
                    dropdown.style.display = 'none';
                }
            });
            // Show the dropdown associated with the hovered group
            dropdowns[index].style.display = 'block';
        });
    });

    // Add mouseleave event listeners to all dropdowns
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseleave', function() {
            // Hide the dropdown when mouse leaves
            dropdown.style.display = 'none';
        });
    });

    // Event listener for clicking anywhere else on the document body
    document.body.addEventListener('click', function() {
        // Hide all dropdowns when clicking anywhere else on the document body
        dropdowns.forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    });

    // Prevent dropdown from closing when clicking inside the dropdown content
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the document body
        });
    });
});
// JavaScript to hide the dropdown when the mouse is not on the profile picture icon or the dropdown contents
 function toggleDropdown() {
        var dropdownContent = document.getElementById("profile-dropdown").getElementsByClassName("profile-details")[0];
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    }