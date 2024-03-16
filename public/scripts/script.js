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

// By default, display components of choice 1
document.querySelectorAll('.choice1').forEach(component => component.classList.remove('hide'));

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

document.addEventListener('DOMContentLoaded', function() {
    var profileInfo = document.getElementById('profile-info');
    profileInfo.style.display = 'none';
    document.getElementById('profile-icon').addEventListener('click', function() {
        // Toggle the display style of the profile info div
        if (profileInfo.style.display === 'block') {
            profileInfo.style.display = 'none';
        } else {
            profileInfo.style.display = 'block';
        }
    });
});

// HUMBERGER MENU 
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var optionsMenu = document.getElementById('options-menu');

    // Event listener for clicking the menu toggle icon
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from bubbling up to the document body

        // Toggle the display style of the options menu
        if (optionsMenu.style.display === 'block') {
            optionsMenu.style.display = 'none';
        } else {
            optionsMenu.style.display = 'block';
        }
    });

    // Event listener for clicking anywhere else on the document body to close the options menu
    document.body.addEventListener('click', function(event) {
        // Check if the click target is not the menu toggle icon or the options menu
        if (event.target !== menuToggle && event.target !== optionsMenu) {
            // Hide the options menu if it's currently visible
            if (optionsMenu.style.display === 'block') {
                optionsMenu.style.display = 'none';
            }
        }
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
