export default class CounterAnimation {
  constructor(selector, start, end, duration) {
    this.element = document.querySelector(selector);
    if (!this.element) {
      return;
    }

    this.start = start;
    this.end = end;
    this.duration = duration;
    this.started = false;

    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      (entry, observer) => {
        if (entry[0].isIntersecting && !this.started) {
          this.startAnimation();
          this.started = true;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.element);
  }

  startAnimation() {
    let current = this.start;
    const stepTime = Math.abs(this.duration / (this.end - this.start));

    const counter = setInterval(() => {
      current++;
      this.element.textContent = current + '%';
      if (current >= this.end) {
        clearInterval(counter);
      }
    }, stepTime);
  }
}
