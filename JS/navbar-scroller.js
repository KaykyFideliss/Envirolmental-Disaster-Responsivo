  /* js da NAVBAR ---- TROCA DE COR  */
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar-transparent' );
    } else {
      navbar.classList.add('navbar-transparent');
    }
  });

  

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('dropdown-menu' );
    } else {
      navbar.classList.add('dropdown-menu');
    }
  });


  