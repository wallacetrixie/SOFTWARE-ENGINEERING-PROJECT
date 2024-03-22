  document.addEventListener("DOMContentLoaded", function() {
    const followUsBtn = document.getElementById("followUsBtn");
    const socialLinksDropdown = document.getElementById("socialLinksDropdown");

    // Toggle the dropdown on button click
    followUsBtn.addEventListener("click", function() {
      socialLinksDropdown.classList.toggle("show");
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
      if (!event.target.matches("#followUsBtn")) {
        if (socialLinksDropdown.classList.contains("show")) {
          socialLinksDropdown.classList.remove("show");
        }
      }
    });
  });

function load() {
    window.open('contact.html');
}
  function quiz() {
    window.open('quiz.html');
  }
    function about() {
    window.open('about_page.html');
  }