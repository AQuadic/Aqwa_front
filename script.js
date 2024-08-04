document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const menuItems = document.getElementById('navbar-sticky');

    toggleButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
});