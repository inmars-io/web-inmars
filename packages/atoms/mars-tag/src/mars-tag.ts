import { MarsTag } from './MarsTag.js';

if (!customElements.get('mars-tag')) {
  customElements.define('mars-tag', MarsTag);
}
