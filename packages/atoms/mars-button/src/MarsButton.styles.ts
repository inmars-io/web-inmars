import { css } from 'lit-element';

export const styles = css`
  button {
    --button-color: var(--color-primary-500);
    --button-color-hover: var(--color-primary-600);
    --button-color-active: var(--color-primary-400);
    --button-color-focus: var(--color-primary-300);
    --button-color-text: var(--color-gray-100);
    --button-family-font: var(--font-family-primary);
    --button-font-size: var(--font-size-mobile-sm);
    font-family: var(--button-family-font);
    background-color: var(--button-color);
    color: var(--button-color-text);
    font-size: var(--button-font-size);
    border: 0;
    padding: 10px 22px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: translate(0, 0);
  }

  :host([variant*='primary']) button {
    --button-color: var(--color-primary-500);
    --button-color-hover: var(--color-primary-600);
    --button-color-active: var(--color-primary-400);
    --button-color-focus: var(--color-primary-300);
  }

  :host([variant*='secondary']) button {
    --button-color: var(--color-secondary-500);
    --button-color-hover: var(--color-secondary-600);
    --button-color-active: var(--color-secondary-400);
    --button-color-focus: var(--color-secondary-300);
  }

  :host([variant*='tertiary']) button {
    --button-color: var(--color-tertiary-500);
    --button-color-hover: var(--color-tertiary-600);
    --button-color-active: var(--color-tertiary-400);
    --button-color-focus: var(--color-tertiary-300);
  }

  :host([variant*='outline']) button {
    background: transparent;
    border: 1px solid var(--button-color);
    color: var(--button-color);
  }

  button:hover:not([disabled]),
  :host([variant*='outline']) button:hover:not([disabled]) {
    background-color: var(--button-color-hover);
    color: var(--button-color-text);
    transition: all 0.35s ease;
  }

  button:active:not([disabled]),
  :host([variant*='outline']) button:active:not([disabled]) {
    transform: translate(1px, 1px);
    color: var(--button-color-text);
    background-color: var(--button-color-active);
  }

  button:focus-visible:not([disabled]),
  button:active:not([disabled]) {
    box-shadow: var(--button-color-focus) 0px 0px 0px 5px;
    outline: none;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
