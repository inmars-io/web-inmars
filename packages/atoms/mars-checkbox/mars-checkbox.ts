import { MarsCheckbox } from './src/MarsCheckbox.js';

if (!customElements.get('mars-checkbox')) {
  customElements.define('mars-checkbox', MarsCheckbox);
}
