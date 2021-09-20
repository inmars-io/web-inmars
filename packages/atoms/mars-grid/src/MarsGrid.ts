import { html, styleMap, MarsElement, property } from '@web-inmars/mars-core';
import { styles } from './MarsGrid.styles';

/**
 * # <mars-grid>
 * Web component that allows us to show an accessible and beautiful grid so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-grid --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-grid/mars-grid.js';
 * </script>
 *
 * <mars-grid>
 *     Click me!
 * </mars-grid>
 * ```
 * @element mars-grid
 */

export class MarsGrid extends MarsElement {
  @property({ type: Boolean }) inline = false;

  @property({ type: String, attribute: 'grid-template' }) gridTemplate = '';

  @property({ type: String }) gap = '';

  @property({ type: String }) grid = '';

  @property({ type: String, attribute: 'justify-items' }) justifyItems = '';

  @property({ type: String, attribute: 'align-items' }) alignItems = '';

  @property({ type: String, attribute: 'place-items' }) placeItems = '';

  @property({ type: String, attribute: 'justify-content' }) justifyContent = '';

  @property({ type: String, attribute: 'align-content' }) alignContent = '';

  @property({ type: String, attribute: 'place-content' }) placeContent = '';

  @property({ type: String, attribute: 'grid-auto-flow' }) gridAutoFlow = '';

  @property({ type: String, attribute: 'container-size' }) containerSize = '';

  @property({ type: Object, attribute: false }) private _styleMap: any = {};

  @property({ type: Object, attribute: false }) private _styleChildren: any = {
    gridColumn: 'grid-column',
    gridRow: 'grid-row',
    gridArea: 'grid-area',
    justifySelf: 'justify-self',
    alignSelf: 'align-self',
    placeSelf: 'place-self',
  };

  private _children: any = [];

  createRenderRoot() {
    return this;
  }

  update(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties) {
      changedProperties.forEach((_oldValue, propName) => {
        const newValue = this[propName as keyof this];
        if (
          newValue &&
          propName !== '_styleMap' &&
          propName !== '_styleChildren' &&
          propName !== 'children' &&
          propName !== 'containerSize'
        ) {
          this._styleMap[propName] = newValue;
        }
      });
    }

    super.update(changedProperties);
  }

  _getChildren() {
    for (let i = 0; i <= this.children.length; i++) {
      this.children[i] && this._children.push(this.children[i]);
      Object.keys(this._styleChildren).forEach(key => {
        const attribute = this._children[i]?.getAttribute(
          this._styleChildren[key]
        );
        if (attribute) this._children[i].style[key] = attribute;
      });
    }
    return this._children;
  }

  render() {
    return html`<section part="grid" style=${styleMap(this._styleMap)}>
        ${this._getChildren()}
      </section>
      <style>
        ${styles}
      </style> `;
  }
}
