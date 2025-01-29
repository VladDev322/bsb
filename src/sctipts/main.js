import HeaderMenu from './toggleMenu.js';
import OverlayForm from './OverlayForm.js';
import ActiveAnimation from './ActiveAnimation.js';
import CounterAnimation from './CounterAnimation.js';
import initSwiper from './swiperConfig';
import PhoneMask from './PhoneMask.js';

// Header Overlay
new HeaderMenu();

// Form Overlay
new OverlayForm();

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
const phoneMaskOverlay = new PhoneMask('#phone-overlay', '+7 (999) 999-99-99');
const phoneMaskFooter = new PhoneMask('#phone-footer', '+7 (999) 999-99-99');

phoneMaskOverlay.applyMask();
phoneMaskFooter.applyMask();
