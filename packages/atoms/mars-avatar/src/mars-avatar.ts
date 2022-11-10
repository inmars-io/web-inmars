import { MarsAvatar } from './MarsAvatar.js';

if (!customElements.get('mars-avatar')) {
  customElements.define('mars-avatar', MarsAvatar);
}
