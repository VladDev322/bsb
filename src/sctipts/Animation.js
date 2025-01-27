export default class Animation {
  constructor(selector, delay = 500) {
    this.elements = document.querySelectorAll(selector);
    this.delay = delay;

    if (this.elements.length > 0) {
      this.initObserver();
    }
  }

  initObserver() {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElements();
          observer.disconnect();
        }
      });
    }, observerOptions);

    observer.observe(this.elements[0]);
  }

  animateElements() {
    this.elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('is-active');
      }, index * this.delay);
    });
  }
}
