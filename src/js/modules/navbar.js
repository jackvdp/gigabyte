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
  const navbars = document.querySelectorAll('.navbar-dynamic-bg');
  const scrollThreshold = 100; // Adjust this value as needed

  navbars.forEach(navbar => {
    const logoDark = navbar.querySelector('.logo-dark');
    const logoLight = navbar.querySelector('.logo-light');

    if (window.scrollY <= scrollThreshold && !navbar.classList.contains('navbar-active')) {
      navbar.classList.add('navbar-transparent');
      if (logoDark && logoLight) {
        logoDark.style.display = 'none';
        logoLight.style.display = 'inline-block';
      }
    } else {
      navbar.classList.remove('navbar-transparent');
      if (logoDark && logoLight) {
        logoDark.style.display = 'inline-block';
        logoLight.style.display = 'none';
      }
    }
  });
}

// Call the function on scroll and on page load
window.addEventListener('scroll', updateNavbarTransparency);
window.addEventListener('load', updateNavbarTransparency);