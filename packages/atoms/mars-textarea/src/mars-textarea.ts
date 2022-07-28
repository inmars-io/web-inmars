import { MarsTextarea } from './MarsTextarea.js';

if (!customElements.get('mars-textarea')) {
  customElements.define('mars-textarea', MarsTextarea);
}
