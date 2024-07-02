const navbar = document.querySelectorAll('.navbar');
const body = document.body;

navbar.forEach(function (element) {
    element.addEventListener('hide.bs.collapse', function () {
        body.classList.remove('navbar-active');
    })
    element.addEventListener('show.bs.collapse', function () {
        setTimeout(() => {
            body.classList.add('navbar-active');
        }, 0)
    })
})

function updateNavbarTransparency() {
    const navbar = document.querySelector('#mainNav');
    const scrollThreshold = 100; // Adjust this value as needed
  
    if (window.scrollY <= scrollThreshold && !navbar.classList.contains('navbar-active')) {
      navbar.classList.add('navbar-transparent');
    } else {
      navbar.classList.remove('navbar-transparent');
    }
  }
  
  // Call the function on scroll and on page load
  window.addEventListener('scroll', updateNavbarTransparency);
  window.addEventListener('load', updateNavbarTransparency);