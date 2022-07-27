import { css } from '@web-inmars/mars-core';

export const styles = css`
  svg {
    --icon-color: var(--color-primary-500);
    fill: var(--icon-color);
    transition: all 0.5s ease;
  }

  :host([variant*='primary']) svg {
    --icon-color: var(--color-primary-500);
  }

  :host([variant*='secondary']) svg {
    --icon-color: var(--color-secondary-500);
  }

  :host([variant*='tertiary']) svg {
    --icon-color: var(--color-tertiary-500);
  }
`;
