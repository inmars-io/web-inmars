import { MarsLink } from './MarsLink.js';

if (!customElements.get('mars-link')) {
  customElements.define('mars-link', MarsLink);
}
