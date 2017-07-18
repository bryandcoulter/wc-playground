import format from 'date-fns/format';
const template = `<h3>I have no template</h3>
    <h1></h1>
    <button>Load WC-Element</button>
    <my-element></my-element>`;

class MyVanillaWC extends HTMLElement {
  static get is() { return 'my-vanilla-wc'; }
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    console.dir(this);
    this.shadowRoot.innerHTML = template;
  }
  connectedCallback() {
    this.shadowRoot.querySelector('h1').innerHTML = `Hello, World! It's ${format(new Date(), 'MM/DD/YYYY')}`;
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click',() =>{
      import(/* webpackChunkName: "my-element" */ './my-element.html');
    })
  }
}

window.customElements.define(MyVanillaWC.is, MyVanillaWC);