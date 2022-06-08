import { MarsText } from './src/MarsText.js';

if (!customElements.get('mars-text'))
  customElements.define('mars-text', MarsText);
