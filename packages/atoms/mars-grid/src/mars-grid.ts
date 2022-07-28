import { MarsGrid } from './MarsGrid.js';

if (!customElements.get('mars-grid')) {
  customElements.define('mars-grid', MarsGrid);
}
