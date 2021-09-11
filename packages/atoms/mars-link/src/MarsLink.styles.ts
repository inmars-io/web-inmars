import { css } from 'lit-element';

export const styles = css`
  :host {
    display: block;
    text-align: var(--text-align);
    font-family: var(--text-family-font, var(--font-family-primary));
    background-color: var(--text-background-color, transparent);
    font-size: var(--text-font-size), var(--font-size-mobile-sm);
    font-weight: var(--text-font-weight, var(--font-weight-base));
    font-style: var(--text-font-style, var(--font-style-normal));
    transition: all 0.5s ease;
    color: var(--text-color, var(--color-gray-600));
  }

  :host .text {
    all: var(--text-all);
  }

  :host([variant*='primary']) {
    --text-color: var(--color-primary-500);
  }

  :host([variant*='secondary']) {
    --text-color: var(--color-secondary-500);
  }

  :host([variant*='tertiary']) {
    --text-color: var(--color-tertiary-500);
  }

  :host([variant*='left']) {
    --text-align: left;
  }

  :host([variant*='right']) {
    --text-align: right;
  }

  :host([variant*='center']) {
    --text-align: center;
  }

  :host([variant*='unset']) {
    --text-all: unset;
  }

  :host([variant*='inherit']) {
    --text-all: inherit;
  }

  text:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
