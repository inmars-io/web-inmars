import { MarsButton } from './src/MarsButton.js';

if (!customElements.get('mars-button'))
  customElements.define('mars-button', MarsButton);
