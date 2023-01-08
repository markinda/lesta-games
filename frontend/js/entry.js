import { SwiperTechnic } from "./components/swiper";

window.addEventListener('load', () => {

  const skip = document.querySelector('.preload');

  skip.classList.remove('preload');

  SwiperTechnic();
}, false);