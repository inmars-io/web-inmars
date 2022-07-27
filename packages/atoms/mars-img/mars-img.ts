import { MarsImg } from './src/MarsImg.js';

if (!customElements.get('mars-img')) {
  customElements.define('mars-img', MarsImg);
}
