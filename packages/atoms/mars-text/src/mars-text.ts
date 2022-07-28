import { MarsText } from './MarsText.js';

if (!customElements.get('mars-text')) {
  customElements.define('mars-text', MarsText);
}
