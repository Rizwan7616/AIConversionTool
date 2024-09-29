function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');
    const menuIcon = document.querySelector('.menu-icon');

    // Toggle the active class on the navbar
    navbar.classList.toggle('active');

    // Show or hide links based on navbar's active state
    if (navbar.classList.contains('active')) {
        navLinks.style.display = 'flex'; // Show nav links
        authLinks.style.display = 'flex'; // Show auth links
    } else {
        navLinks.style.display = 'none'; // Hide nav links
        authLinks.style.display = 'none'; // Hide auth links
    }
}
