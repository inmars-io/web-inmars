import { MarsBadge } from './MarsBadge.js';

if (!customElements.get('mars-badge')) {
  customElements.define('mars-badge', MarsBadge);
}
