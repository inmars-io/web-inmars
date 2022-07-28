import { property, MarsElement, html } from '@web-inmars/mars-core';
import { styles } from './MarsIcon.styles.js';

/**
 * # <mars-icon>
 * Web component that allows us to show an accessible and beautiful icon so that users can interact
 *
 * ## Installation
 * ```bash
 *  npm i @web-inmars/mars-icon --save
 * ```
 *
 * ## Usage
 * ```html
 * <script type="module">
 *   import 'mars-icon/mars-icon.js';
 * </script>
 *
 * <mars-icon name="iconname"></mars-icon>
 * ```
 *
 * ## ⚠️ Load the icon font
 * If you don't provide your own icon font via the --icon-font CSS variable you need to load the default google font material icons. You can do that by inserting the following link in the head tag of your index.html file. Check out the available icons here.
 *
 * ```html
 * <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 * ```
 * @element mars-icon
 */

export class MarsIcon extends MarsElement {
  static get styles(): any {
    return [...super.styles, styles];
  }

  @property({ type: String }) name = '';

  render() {
    return html` ${this.name} `;
  }
}
