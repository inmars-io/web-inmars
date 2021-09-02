import { svg, property, MarsElement } from '@webinmars/core';
import { selectIcon } from '@webinmars/mars-awesome';
import { styles } from './MarsIcon.styles';

export class MarsIcon extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) type = '';

  @property({ type: String }) name = '';

  @property({ type: String }) width = '';

  @property({ type: String }) height = '';

  @property({ type: String, attribute: true }) variant = '';

  render() {
    const icon: { path: any; viewBox: any } =
      selectIcon(this.name, this.type) || '';
    return (
      icon &&
      svg`
      <svg part="svg" xmlns="http://www.w3.org/2000/svg" viewBox=${icon?.viewBox} width=${this.width} height=${this.height}>
        <path part="path" d=${icon?.path}>
      </svg>
    `
    );
  }
}
