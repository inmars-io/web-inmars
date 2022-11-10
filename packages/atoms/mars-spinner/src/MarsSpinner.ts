import { html, property, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsSpinner.styles.js';

export class MarsSpinner extends MarsElement {
  static styles: any = [MarsElement.styles, styles];

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
