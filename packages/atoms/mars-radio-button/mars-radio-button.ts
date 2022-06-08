import { MarsRadioButton } from './src/MarsRadioButton.js';

if (!customElements.get('mars-radio-button')) {
  customElements.define('mars-radio-button', MarsRadioButton);
}
