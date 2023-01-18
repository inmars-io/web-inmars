import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --input-color: var(--color-gray-200);
    --input-color-border: var(--color-primary-500);
    --input-color-hover: var(--color-gray-300);
    --input-color-active: var(--color-primary-400);
    --input-color-focus: var(--color-primary-300);
    --input-color-text: var(--color-gray-700);
    --input-color-label: var(--color-gray-600);
    --input-color-placeholder: var(--color-gray-600);
    --input-family-font: var(--font-family-primary);
    --input-font-size: var(--font-size-mobile-sm);
    --input-font-size-label: var(--font-size-mobile-sm);
    font-family: var(--input-family-font);
    display: grid;
    min-height: 46px;
    min-width: 200px;
    grid-template-areas: 'input';
    box-sizing: border-box;
    font-weight: 300;
  }

  input {
    font-family: var(--input-family-font);
    background-color: var(--input-color);
    font-size: var(--input-font-size);
    color: var(--input-color-text);
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    grid-area: input;
    box-sizing: border-box;
    padding: 12px 18px 12px 18px;
    font-weight: 300;
  }

  input::placeholder {
    visibility: hidden;
  }

  :host([variant*='primary']) input {
    --input-color-border: var(--color-primary-500);
    --input-color-active: var(--color-primary-400);
    --input-color-focus: var(--color-primary-300);
    --input-color-text: var(--color-primary-500);
  }

  :host([variant*='secondary']) input {
    --input-color-border: var(--color-secondary-500);
    --input-color-active: var(--color-secondary-400);
    --input-color-focus: var(--color-secondary-300);
    --input-color-text: var(--color-secondary-500);
  }

  :host([variant*='tertiary']) input {
    --input-color-border: var(--color-tertiary-500);
    --input-color-active: var(--color-tertiary-400);
    --input-color-focus: var(--color-tertiary-300);
    --input-color-text: var(--color-tertiary-500);
  }

  input:hover:not([disabled]) {
    background-color: var(--input-color-hover);
    color: var(--input-color-text);
    transition: all 0.35s ease;
  }

  input:active:not([disabled]),
  input:focus:not([disabled]),
  input:not(:placeholder-shown) {
    border: 2px solid var(--input-color-active);
    padding: 16px 18px 0px 18px;
    outline: none;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  label {
    color: var(--input-color-label);
    grid-area: input;
    margin: 14px 0px 14px 19px;
    font-size: var(--input-font-size-label);
    transition: all 0.5s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  input:active:not([disabled]) ~ label,
  input:focus:not([disabled]) ~ label,
  input:not(:placeholder-shown) ~ label {
    margin: 6px 0px 14px 19px;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-primary-500);
  }

  span {
    margin-top: 5px;
    color: var(--color-gray-800);
    transition: all 0.5s ease;
  }
`;
