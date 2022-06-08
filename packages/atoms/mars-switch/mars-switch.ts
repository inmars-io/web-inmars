import { MarsSwitch } from './src/MarsSwitch.js';

if (!customElements.get('mars-switch'))
  customElements.define('mars-switch', MarsSwitch);
