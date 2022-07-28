import { MarsTextfield } from './MarsTextfield.js';

if (!customElements.get('mars-textfield')) {
  customElements.define('mars-textfield', MarsTextfield);
}
