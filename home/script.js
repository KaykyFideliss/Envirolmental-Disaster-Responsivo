/*EFEITO CARACTER- SOBRE E.I */

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " ENVIRONMENTAL ";
    }, 0);
    setTimeout(() => {
        text.textContent = " DISASTER";
    }, 4000);
    setTimeout(() => {
        text.textContent = " E.D";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

/*carrosel*/

function initializeSlider(sliderId) {
    const track = document.getElementById(sliderId);
  
    let autoSliderInterval = null;
    let isAnimating = false;
  
    const autoMoveSlider = () => {
      if (isAnimating) return;
      isAnimating = true;
  
      let currentPercentage = parseFloat(track.dataset.percentage) || 0;
      const nextPercentage = currentPercentage - 20;
  
      if (nextPercentage < -60) {
        track.dataset.percentage = "0";
      } else {
        track.dataset.percentage = nextPercentage;
      }
  
      track.style.transition = "transform 1s ease";
      track.style.transform = `translateX(${track.dataset.percentage}%)`;
  
      setTimeout(() => {
        isAnimating = false;
        autoMoveSlider();
      }, 2000);
    };
  
    const startAutoMove = () => {
      if (!autoSliderInterval) {
        autoSliderInterval = setTimeout(autoMoveSlider, 2000);
      }
    };
  
    const resetSlider = () => {
      track.dataset.percentage = "0";
      track.style.transition = "none";
      track.style.transform = `translateX(${track.dataset.percentage}%)`;
      isAnimating = false;
      clearTimeout(autoSliderInterval);
      autoSliderInterval = null;
      startAutoMove();
    };
  
    const handleOnDown = (e) => {
      clearTimeout(autoSliderInterval);
      track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
    };
  
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
      startAutoMove();
    };
  
    const handleOnMove = (e) => {
      if (!track.dataset.mouseDownAt || track.dataset.mouseDownAt === "0") return;
  
      const clientX = e.clientX || e.touches[0].clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
      const maxDelta = window.innerWidth;
  
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -60);
  
      track.dataset.percentage = nextPercentage;
      track.style.transform = `translateX(${nextPercentage}%)`;
    };
  
    // Eventos de mouse e touch
    track.addEventListener("mousedown", (e) => handleOnDown(e));
    track.addEventListener("mouseup", () => handleOnUp());
    track.addEventListener("mousemove", (e) => handleOnMove(e));
  
    track.addEventListener("touchstart", (e) => handleOnDown(e));
    track.addEventListener("touchend", () => handleOnUp());
    track.addEventListener("touchmove", (e) => handleOnMove(e));
  
    window.addEventListener("load", resetSlider);
  }
  
  initializeSlider("slidermais-1");
  
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

