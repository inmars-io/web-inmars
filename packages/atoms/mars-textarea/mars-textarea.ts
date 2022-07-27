import { MarsTextarea } from './src/MarsTextarea.js';

if (!customElements.get('mars-textarea')) {
  customElements.define('mars-textarea', MarsTextarea);
}
