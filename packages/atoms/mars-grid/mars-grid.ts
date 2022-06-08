import { MarsGrid } from './src/MarsGrid.js';

if (!customElements.get('mars-grid')) {
  customElements.define('mars-grid', MarsGrid);
}
