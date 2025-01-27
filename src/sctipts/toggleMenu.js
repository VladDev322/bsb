export default class HeaderMenu {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    menuButton: '[data-js-header-menu-button]',
    input: '[data-js-header-input]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.menuButtonElement = this.rootElement.querySelector(
      this.selectors.menuButton
    );
    this.menuInputElement = this.rootElement.querySelector(
      this.selectors.input
    );
    this.bindEvents();
  }

  onMenuButtonClick = () => {
    this.menuInputElement.classList.toggle(this.stateClasses.isActive);
    this.menuButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  bindEvents() {
    this.menuButtonElement.addEventListener('click', this.onMenuButtonClick);
  }
}
