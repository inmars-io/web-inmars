import { MarsSwitch } from './MarsSwitch.js';

if (!customElements.get('mars-switch')) {
  customElements.define('mars-switch', MarsSwitch);
}
