import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --textarea-color: var(--color-gray-200);
    --textarea-color-border: var(--color-primary-500);
    --textarea-color-hover: var(--color-gray-300);
    --textarea-color-active: var(--color-primary-400);
    --textarea-bg-color-focus: var(--color-gray-100);
    --textarea-color-focus: var(--color-primary-300);
    --textarea-color-text: var(--color-gray-700);
    --textarea-color-text-filled: var(--color-primary-500);
    --textarea-color-label: var(--color-gray-600);
    --textarea-color-placeholder: var(--color-gray-600);
    --textarea-family-font: var(--font-family-primary);
    --textarea-font-size: var(--font-size-mobile-sm);
    --textarea-font-size-label: var(--font-size-mobile-sm);
    font-family: var(--textarea-family-font);
    display: grid;
    min-height: 100px;
    min-width: 300px;
    grid-template-areas: 'textarea';
    box-sizing: border-box;
    font-weight: 300;
  }

  textarea {
    font-family: var(--textarea-family-font);
    background-color: var(--textarea-color);
    font-size: var(--textarea-font-size);
    color: var(--textarea-color-text);
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    grid-area: textarea;
    box-sizing: border-box;
    padding: 12px 18px 12px 18px;
    font-weight: 300;
  }

  textarea::placeholder {
    visibility: hidden;
  }

  :host([variant*='primary']) textarea {
    --textarea-color-border: var(--color-primary-500);
    --textarea-color-active: var(--color-primary-400);
    --textarea-color-focus: var(--color-primary-300);
    --textarea-color-text: var(--color-primary-500);
    --textarea-color-text-filled: var(--color-primary-500);
  }

  :host([variant*='secondary']) textarea {
    --textarea-color-border: var(--color-secondary-500);
    --textarea-color-active: var(--color-secondary-400);
    --textarea-color-focus: var(--color-secondary-300);
    --textarea-color-text: var(--color-secondary-500);
    --textarea-color-text-filled: var(--color-secondary-500);
  }

  :host([variant*='tertiary']) textarea {
    --textarea-color-border: var(--color-tertiary-500);
    --textarea-color-active: var(--color-tertiary-400);
    --textarea-color-focus: var(--color-tertiary-300);
    --textarea-color-text: var(--color-tertiary-500);
    --textarea-color-text-filled: var(--color-tertiary-500);
  }

  textarea:hover:not([disabled]),
  textarea:hover:not([disabled]) ~ label {
    background-color: var(--textarea-color-hover);
    color: var(--textarea-color-text);
    transition: all 0.35s ease;
  }

  textarea:active:not([disabled]),
  textarea:focus:not([disabled]),
  textarea:not(:placeholder-shown) {
    border: 2px solid var(--textarea-color-active);
    padding: 38px 18px 15px 18px;
    outline: none;
  }

  textarea:not(:placeholder-shown) {
    color: var(--textarea-color-text-filled);
  }

  textarea:focus:not([disabled]),
  textarea:focus:not([disabled]) ~ label {
    background-color: var(--textarea-bg-color-focus);
  }

  textarea:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  textarea:disabled ~ label {
    background-color: transparent;
    opacity: 0.5;
  }

  label {
    color: var(--textarea-color-label);
    grid-area: textarea;
    width: inherit;
    padding: 24px 0px 5px 20px;
    margin: 2px 12px 14px 2px;
    width: auto;
    height: fit-content;
    font-size: var(--textarea-font-size-label);
    transition: all 0.5s ease;
    pointer-events: none;
    z-index: 0;
    background-color: var(--textarea-color);
  }

  textarea:active:not([disabled]) ~ label,
  textarea:focus:not([disabled]) ~ label,
  textarea:not(:placeholder-shown) ~ label {
    padding: 18px 0px 2px 19px;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-gray-800);
  }

  span {
    margin-top: 5px;
    color: var(--color-gray-800);
    transition: all 0.5s ease;
  }
`;
