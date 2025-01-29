// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

export function initSwiper() {
  const swiperParnters = new Swiper('.swiper-container-parnters', {

    modules: [Navigation, Autoplay],

    loop: true,

    // autoplay: {
    //   delay: 3000
    // },

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

  const swiperNews = new Swiper('.swiper-container-news', {

    modules: [Navigation, Autoplay],

    loop: true,

    autoplay: {
      delay: 4000
    },

    breakpoints: {
      1170: {
        slidesPerView: 3,
      },
      730: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1,
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

  return swiperParnters, swiperNews;
}