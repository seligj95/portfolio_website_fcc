// add class navbarDark on navbar scroll and make navbar fixed
const header = document.querySelector('.navbar');
const siteHeader = document.querySelector('.site-header');
console.log(header)

window.onscroll = function() {
    const top = window.scrollY;
    const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
    
    if(top >= headerHeight) {
        header.classList.add('navbarDark', 'fixed-navbar');
    }
    else {
        header.classList.remove('navbarDark', 'fixed-navbar');
    }
    
    // Update active navbar item based on scroll position
    updateActiveNavItem();
}

// Function to update active navbar item based on current section
function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let current = '';
    const scrollPosition = window.scrollY + 100; // Offset for navbar height
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    // Remove active class from all nav items
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current section's nav item
    if (current) {
        const activeNavItem = document.querySelector(`.nav-link[href="#${current}"]`)?.parentElement;
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})