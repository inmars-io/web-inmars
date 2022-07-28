import { MarsImg } from './MarsImg.js';

if (!customElements.get('mars-img')) {
  customElements.define('mars-img', MarsImg);
}
