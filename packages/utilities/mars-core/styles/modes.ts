import { css } from 'lit';

export const lightMode = css`
  :host,
  :host([mode='light']) {
    --mars-mode-primary: var(--color-light-primary);
    --mars-mode-on-primary: var(--color-light-on-primary);
    --mars-mode-secondary: var(--color-light-secondary);
    --mars-mode-on-secondary: var(--color-light-on-secondary);
    --mars-mode-secondary-container: var(--color-light-secondary-container);
    --mars-mode-on-secondary-container: var(
      --color-light-on-secondary-container
    );
    --mars-mode-surface1: var(--color-light-surface1);
    --mars-mode-on-surface: var(--color-light-on-surface);
    --mars-mode-outline: var(--color-light-outline);
  }
`;

export const darkMode = css`
  :host([mode='dark']) {
    --mars-mode-primary: var(--color-dark-primary);
    --mars-mode-on-primary: var(--color-dark-on-primary);
    --mars-mode-secondary: var(--color-dark-secondary);
    --mars-mode-on-secondary: var(--color-dark-on-secondary);
    --mars-mode-secondary-container: var(--color-dark-secondary-container);
    --mars-mode-on-secondary-container: var(
      --color-dark-on-secondary-container
    );
    --mars-mode-surface1: var(--color-dark-surface1);
    --mars-mode-on-surface: var(--color-dark-on-surface);
    --mars-mode-outline: var(--color-dark-outline);
  }
`;
