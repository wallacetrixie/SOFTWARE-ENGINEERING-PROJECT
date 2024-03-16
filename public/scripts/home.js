function Home() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Create the main container div
    const mainDiv = document.createElement('div');
    mainDiv.className = `main ${isMenuOpen ? 'menu-open' : ''}`;

    // Create the menu toggle button
    const menuToggleDiv = document.createElement('div');
    menuToggleDiv.className = 'menu-toggle';
    menuToggleDiv.addEventListener('click', toggleMenu);

    // Create the bars icon
    const barsIcon = document.createElement('i');
    barsIcon.className = 'fas fa-bars';
    menuToggleDiv.appendChild(barsIcon);
    mainDiv.appendChild(menuToggleDiv);
    return mainDiv;
}

   document.addEventListener('DOMContentLoaded', function() {
      var signupLink = document.getElementById('login');
      
      signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        var url = this.getAttribute('href');
        window.open(url, '_blank'); // Open the new page in a new tab
      });
    });