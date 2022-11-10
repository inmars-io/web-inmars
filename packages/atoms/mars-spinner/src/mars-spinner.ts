import { MarsSpinner } from './MarsSpinner.js';

if (!customElements.get('mars-spinner')) {
  customElements.define('mars-spinner', MarsSpinner);
}
