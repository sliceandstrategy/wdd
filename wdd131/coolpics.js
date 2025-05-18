document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    
    function toggleMenu() {
        navLinks.classList.toggle('hide');
    }
    
    menuButton.addEventListener('click', toggleMenu);
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 1000) {
            navLinks.classList.remove('hide');
        } else {
            navLinks.classList.add('hide');
        }
    }
    
    // Call handleResize on page load
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Image viewer functionality
    const gallery = document.querySelector('.gallery');
    let modal = null;
    let modalImg = null;
    let closeButton = null;
    
    function createModal() {
        // Create modal if it doesn't exist
        if (!modal) {
            modal = document.createElement('dialog');
            document.body.appendChild(modal);
            
            // Add click event to close when clicking outside the image
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.close();
                }
            });
        }
    }
    
    function showImage(src, alt) {
        createModal();
        
        // Set the modal content
        modal.innerHTML = `
            <img src="${src}" alt="${alt}">
            <button class="close-viewer">X</button>
        `;
        
        // Get references to the modal elements
        modalImg = modal.querySelector('img');
        closeButton = modal.querySelector('.close-viewer');
        
        // Add event listener to close button
        closeButton.addEventListener('click', () => {
            modal.close();
        });
        
        // Show the modal
        modal.showModal();
    }
    
    // Add click event to gallery images
    gallery.addEventListener('click', (event) => {
        // Find the closest img element that was clicked
        const img = event.target.closest('img');
        
        if (img) {
            // Get the src and alt attributes
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            
            // Transform the src to get the full-size image
            // Change norris-sm.jpeg to norris-full.jpeg
            const fullSrc = src.split('-')[0] + '-full.jpeg';
            
            // Show the image in the modal
            showImage(fullSrc, alt);
        }
    });
});