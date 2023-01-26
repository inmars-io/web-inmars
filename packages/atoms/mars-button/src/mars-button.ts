import { MarsButton } from './MarsButton.js';

if (!customElements.get(MarsButton.is)) {
  customElements.define(MarsButton.is, MarsButton);
}
