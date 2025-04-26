// Modal functionality
function openModal(img, url) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalLink = document.getElementById("modalLink");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    modalLink.href = url;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add responsive navigation menu for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add menu button for mobile
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    const menuBtn = document.createElement('div');
    menuBtn.id = 'menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.style.fontSize = '3rem';
    menuBtn.style.cursor = 'pointer';
    menuBtn.style.display = 'none';
    
    header.insertBefore(menuBtn, nav);
    
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Check window width and adjust menu button visibility
    function checkWidth() {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = 'inline-block';
        } else {
            menuBtn.style.display = 'none';
            nav.classList.remove('active');
        }
    }
    
    // Initial check
    checkWidth();
    
    // Check on resize
    window.addEventListener('resize', checkWidth);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 65, // Adjust for header height
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('nav').classList.remove('active');
        }
    });
});
