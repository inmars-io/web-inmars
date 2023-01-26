import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    display: block;
    width: fit-content;
  }

  button {
    --mars-button-color: var(--mars-mode-primary);
    --mars-button-color-text: var(--mars-mode-on-primary);
    --mars-button-color-layer: var(--mars-mode-on-primary);
    --mars-button-color-border: none;
    --mars-button-family-font: var(--font-family-primary);
    --mars-button-font-size: var(--font-size-mobile-xs);
    --mars-button-width-size: inherit;
    font-family: var(--mars-button-family-font);
    background-color: var(--mars-button-color);
    color: var(--mars-button-color-text);
    font-size: var(--mars-button-font-size);
    width: var(--mars-button-width-size);
    border: 0;
    padding: 10px 24px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.35s ease;
    transform: translate(0, 0);
    outline: 1px solid var(--mars-button-color-border);
    outline-offset: -1px;
    font-weight: 500;
  }

  :host([variant*='filled']) button {
    --mars-button-color: var(--mars-mode-primary);
    --mars-button-color-text: var(--mars-mode-on-primary);
    --mars-button-color-border: none;
    --mars-button-color-layer: var(--mars-mode-on-primary);
  }

  :host([variant*='outlined']) button {
    --mars-button-color: transparent;
    --mars-button-color-text: var(--mars-mode-primary);
    --mars-button-color-border: var(--mars-mode-outline);
    --mars-button-color-layer: var(--mars-mode-primary);
  }

  :host([variant*='text']) button {
    --mars-button-color: transparent;
    --mars-button-color-text: var(--mars-mode-primary);
    --mars-button-color-border: none;
    --mars-button-color-layer: var(--mars-mode-primary);
  }

  :host([variant*='elevated']) button {
    --mars-button-color: var(--mars-mode-surface1);
    --mars-button-color-text: var(--mars-mode-primary);
    --mars-button-color-border: none;
    --mars-button-color-layer: var(--mars-mode-primary);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  :host([variant*='tonal']) button {
    --mars-button-color: var(--mars-mode-secondary-container);
    --mars-button-color-text: var(--mars-mode-on-secondary-container);
    --mars-button-color-border: none;
    --mars-button-color-layer: var(--mars-mode-on-secondary-container);
  }

  button:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 100px;
    background-color: var(--mars-button-color-layer);
    opacity: 0;
  }

  button:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  :host([variant*='outline']) button:hover,
  :host([variant*='text']) button:hover {
    box-shadow: none;
  }

  :host([variant*='elevated']) button:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  }

  button:hover:before {
    transition: all 0.35s ease;
    opacity: 0.08;
  }

  button:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  button:active:before,
  button:focus-visible:before {
    opacity: 0.12;
  }

  :host button:disabled {
    --mars-button-color: transparent;
    --mars-button-color-text: var(--mars-mode-on-surface);
    --mars-button-color-layer: var(--mars-mode-on-surface);
    --mars-button-color-border: none;
    box-shadow: none;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }

  :host button:disabled:before {
    opacity: 0.2;
  }

  :host([variant*='outline']) button:disabled,
  :host([variant*='text']) button:disabled {
    --mars-button-color-layer: transparent;
  }

  :host([variant*='outline']) button:disabled:before {
    outline: 1px solid var(--mars-mode-on-surface);
    opacity: 0.6;
  }
`;
