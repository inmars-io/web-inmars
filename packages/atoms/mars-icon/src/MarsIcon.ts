import { svg, property, MarsElement } from '@web-inmars/mars-core';

import { styles } from './MarsIcon.styles';

declare global {
  interface Window {
    __webinmars: any;
  }
}

function selectIcon(name: any, iconSet: any) {
  return name && iconSet[name as keyof object];
}

export class MarsIcon extends MarsElement {
  static get styles() {
    return [...super.styles, styles];
  }

  @property({ type: String }) type = '';

  @property({ type: String }) name = '';

  @property({ type: String }) width = '';

  @property({ type: String }) height = '';

  @property({ type: String, attribute: true }) variant = '';

  __iconSet: any = {};

  connectedCallback() {
    super.connectedCallback();
    this.__setIconSet();
  }

  update(_changedProperties: any) {
    super.update(_changedProperties);
    if (_changedProperties.has('type') || _changedProperties.has('name')) {
      this.__setIconSet();
    }
  }

  __setIconSet() {
    const globalIconSet = window?.__webinmars?.iconSet[this.type];
    if (globalIconSet && globalIconSet !== this.__iconSet) {
      this.__iconSet = globalIconSet;
    }
  }

  render() {
    const icon: { path: any; viewBox: any } = selectIcon(
      this.name,
      this.__iconSet
    );
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
