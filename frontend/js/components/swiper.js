import { Swiper, Thumbs, Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.min.css";

export const SwiperTechnic = () => {
  var swiper = new Swiper(".flags", {
    slidesPerView: 5.85,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5.85,
      }
    }
  });
  var swiper2 = new Swiper(".technic", {
    modules: [Thumbs, Navigation, EffectFade],
    touchMoveStopPropagation: true,
    effect: "fade",
    navigation: {
      nextEl: ".arrow--next",
      prevEl: ".arrow--prev",
    },
    watchSlidesProgress: true,
    allowTouchMove: false,
    thumbs: {
      swiper: swiper,
    },
  });

  window.addEventListener('resize', () => {
    swiper.update();
    swiper2.update();
  });
}