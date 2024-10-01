function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');
    
    // Toggle 'active' class to show or hide the nav and auth links
    navbar.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
        navLinks.style.display = 'flex'; 
        authLinks.style.display = 'flex'; // Ensure auth links are shown
    } else {
        navLinks.style.display = 'none'; 
        authLinks.style.display = 'none'; // Ensure auth links are hidden
    }
}
