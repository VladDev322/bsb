export default class OverlayForm {
  selectors = {
    root: '[data-js-header]',
    formButton: '[data-js-open-form-button]',
    form: '[data-js-form]',
    overlay: '[data-js-form-overlay]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = document.querySelector(this.selectors.overlay);
    this.formButtonElement = this.rootElement.querySelector(
      this.selectors.formButton
    );
    this.form = this.rootElement.querySelector(this.selectors.form);
    this.bindEvents();
  }

  onformButtonClick = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.form.classList.toggle(this.stateClasses.isActive);
  };

  closeForm = (event) => {
    const isClickInsideForm =
      this.form.contains(event.target) ||
      this.formButtonElement.contains(event.target);

    if (!isClickInsideForm) {
      this.overlayElement.classList.remove(this.stateClasses.isActive);
      this.form.classList.remove(this.stateClasses.isActive);
    }
  };

  closeFormOnEsc = (event) => {
    if (event.key === 'Escape') {
      this.overlayElement.classList.remove(this.stateClasses.isActive);
      this.form.classList.remove(this.stateClasses.isActive);
    }
  };

  bindEvents() {
    this.formButtonElement.addEventListener('click', this.onformButtonClick);
    document.addEventListener('click', this.closeForm);
    document.addEventListener('keydown', this.closeFormOnEsc);
  }
}
