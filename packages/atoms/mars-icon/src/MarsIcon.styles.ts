import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --mars-icon-font: var(--icon-font, 'Material Icons');
    --mars-icon-size: var(--icon-size, 24px);
    --mars-icon-color: var(--icon-color, var(--color-primary-500));

    font-size: var(--mars-icon-size);
    font-family: var(--mars-icon-font);

    font-weight: normal;
    font-style: normal;
    color: inherit;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }

  svg {
    fill: var(--mars-icon-color);
    transition: all 0.5s ease;
  }

  :host([variant*='primary']) svg {
    --mars-icon-color: var(--color-primary-500);
  }

  :host([variant*='secondary']) svg {
    --mars-icon-color: var(--color-secondary-500);
  }

  :host([variant*='tertiary']) svg {
    --mars-icon-color: var(--color-tertiary-500);
  }
`;
