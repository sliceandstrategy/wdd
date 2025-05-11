// Toggle navigation menu for medium screens
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    
    // Only toggle menu on medium screens (700px-1000px)
    menuButton.addEventListener('click', function() {
        if (window.innerWidth >= 700 && window.innerWidth < 1000) {
            navLinks.classList.toggle('show');
        }
    });
    
    // Adjust menu visibility when resizing
    window.addEventListener('resize', function() {
        if (window.innerWidth < 700) {
            // Always show menu on small screens
            navLinks.classList.remove('show');
        } else if (window.innerWidth >= 1000) {
            // Always show menu on large screens
            navLinks.classList.remove('show');
        }
    });
});