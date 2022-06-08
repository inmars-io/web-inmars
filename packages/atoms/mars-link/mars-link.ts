import { MarsLink } from './src/MarsLink.js';

if (!customElements.get('mars-link'))
  customElements.define('mars-link', MarsLink);
