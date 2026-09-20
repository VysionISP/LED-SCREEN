class ExplodedDiagram extends HTMLElement {
  constructor() {
    super();
    this.toggle = this.querySelector('.exploded-diagram__toggle');
  }

  connectedCallback() {
    this.toggle.addEventListener('click', this.onToggle.bind(this));
  }

  onToggle() {
    const exploded = this.classList.toggle('is-exploded');
    this.toggle.setAttribute('aria-pressed', exploded);
  }
}

customElements.define('exploded-diagram', ExplodedDiagram);
