// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

export function initSwiper() {
  const swiper = new Swiper('.swiper-container', {

    modules: [Navigation, Autoplay],

    loop: true,

    autoplay: {
      delay: 3000
    },

    breakpoints: {
      1920: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 5,
      },
      640: {
        slidesPerView: 3,
      },
      370: {
        slidesPerView: 2,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return swiper;
}