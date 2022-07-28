import { MarsTitle } from './MarsTitle.js';

if (!customElements.get('mars-title')) {
  customElements.define('mars-title', MarsTitle);
}
