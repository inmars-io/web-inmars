import { html, MarsElement } from '@web-inmars/mars-core';
import { styles } from './MarsDivider.styles.js';

export class MarsDivider extends MarsElement {
  static styles: any = [MarsElement.styles, styles];

  render() {
    return html` <hr part="hr" /> `;
  }
}
