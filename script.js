function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');
    const menuIcon = document.querySelector('.menu-icon');

    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        navLinks.style.display = 'flex'; 
        authLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none'; 
        authLinks.style.display = 'none';
    }
}
