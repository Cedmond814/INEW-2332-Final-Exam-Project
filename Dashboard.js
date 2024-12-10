// Highlight the active navigation link
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Logout button functionality
const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', () => {
  alert('You have logged out.');
  window.location.href = 'Inventoryloginformpage.html'; // Redirect to login page
});
