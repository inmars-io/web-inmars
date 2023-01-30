import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --_icon-font: var(--mars-icon-font, 'Material Icons');
    --_icon-size: var(--mars-icon-size, 24px);
    --_icon-color: var(--mars-icon-color, var(--mars-mode-on-surface));

    font-size: var(--_icon-size);
    font-family: var(--_icon-font);
    font-weight: normal;
    font-style: normal;
    color: var(--_icon-color);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
`;
