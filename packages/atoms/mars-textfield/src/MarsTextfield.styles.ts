import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --_input-color: var(--mars-input-color, var(--mars-mode-surface-variant));
    --_input-color-border: var(
      --mars-input-color-border,
      var(--mars-mode-on-surface-variant)
    );
    --_input-color-hover: var(
      --mars-input-color-hover,
      var(--mars-mode-surface-layer)
    );
    --_input-color-active: var(--mars-input-width, var(--color-primary-400));
    --_input-color-focus: var(--mars-input-width, var(--color-primary-300));
    --_input-color-text: var(
      --mars-input-color-text,
      var(--mars-mode-on-surface)
    );
    --_input-color-label: var(
      --mars-input-color-label,
      var(--mars-mode-on-surface-variant)
    );
    --_input-color-disabled: var(
      --mars-input-color-disabled,
      var(--mars-mode-on-surface)
    );
    --_input-border: var(
      --mars-input-border,
      1px solid var(--_input-color-border)
    );
    --_input-family-font: var(
      --mars-input-family-font,
      var(--font-family-primary)
    );
    --_input-font-size: var(--mars-input-size, var(--font-size-mobile-sm));
    --_input-font-size-label: var(
      --mars-input-size-label,
      var(--font-size-mobile-sm)
    );
    --_input-width: var(--mars-input-width, 13rem);
    font-family: var(--_input-family-font);
    display: grid;
    grid-template: 'input';
    width: var(--_input-width);
    max-width: 100%;
    box-sizing: border-box;
    font-weight: 300;
  }

  input {
    font-family: var(--_input-family-font);
    background-color: var(--_input-color);
    font-size: var(--_input-font-size);
    color: var(--_input-color-text);
    border: 0;
    border-bottom: var(--_input-border);
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    transition: all 0.5s ease;
    grid-area: input;
    box-sizing: border-box;
    padding: 12px 18px 12px 18px;
    font-weight: 300;
    min-height: 56px;
  }

  input::placeholder {
    visibility: hidden;
  }

  input:hover {
    background-color: var(--_input-color-hover);
  }

  input:active,
  input:focus,
  input:not(:placeholder-shown) {
    --_input-border: 2px solid var(--_input-color-active);
    padding: 16px 18px 0px 18px;
    outline: none;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.38;
  }

  input:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: rgba(var(--_input-color-disabled), 0.14);
  }

  label {
    color: var(--_input-color-label);
    grid-area: input;
    margin: 17px 16px;
    font-size: var(--_input-font-size-label);
    transition: all 0.5s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  input:active ~ label,
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    margin: 6px 0px 14px 19px;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-primary-500);
  }

  span {
    padding: 0 16px;
    color: var(--color-gray-800);
    transition: all 0.5s ease;
  }
`;
