import { MarsTextfield } from './src/MarsTextfield.js';

if (!customElements.get('mars-textfield')) {
  customElements.define('mars-textfield', MarsTextfield);
}
