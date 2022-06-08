import { MarsIcon } from './src/MarsIcon.js';

if (!customElements.get('mars-icon'))
  customElements.define('mars-icon', MarsIcon);
