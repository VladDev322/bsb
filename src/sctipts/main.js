import HeaderMenu from './toggleMenu.js';
import ActiveAnimation from './ActiveAnimation.js';
import CounterAnimation from './CounterAnimation.js';
import initSwiper from './swiperConfig';
import PhoneMask from './PhoneMask.js';

// Header Overlay
new HeaderMenu();

// Slogan Animation
new ActiveAnimation('.slogan__text', 1000);

// Steps Animation
new ActiveAnimation('.steps__step', 1000);

// Percents Animation
new CounterAnimation('#percent-1', 15, 95, 2500);
new CounterAnimation('#percent-2', 10, 87, 2500);
new CounterAnimation('#percent-3', 2, 96, 2500);
new CounterAnimation('#percent-4', 0, 100, 2500);

// Swipers
initSwiper();

// Init phone mask
const phoneMask = new PhoneMask('#phone', '+7 (999) 999-99-99');
phoneMask.applyMask();
