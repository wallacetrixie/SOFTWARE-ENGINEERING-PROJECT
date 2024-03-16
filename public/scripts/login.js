   document.addEventListener('DOMContentLoaded', function() {
      var signupLink = document.getElementById('signup-link');
      
      signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        var url = this.getAttribute('href');
        window.open(url, '_blank'); // Open the new page in a new tab
      });
    });