import { MarsProgress } from './MarsProgress.js';

if (!customElements.get('mars-progress')) {
  customElements.define('mars-progress', MarsProgress);
}
