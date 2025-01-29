import Inputmask from 'inputmask';

export default class PhoneMask {
  constructor(selector, mask) {
    this.selector = selector;
    this.mask = mask;
  }

  applyMask() {
    const phoneInput = document.querySelector(this.selector);
    if (phoneInput) {
      Inputmask(this.mask).mask(phoneInput);
    } else {
      console.warn(`PhoneMask: Элемент ${this.selector} не найден.`);
    }
  }
}
