import { css } from 'lit-element';

export const styles = css`
  :host {
    --checkbox-color-bg: var(--color-gray-300);
    --checkbox-color-bg-checked: var(--color-primary-500);
    --checkbox-color-bg-disabled: var(--color-gray-200);
    --checkbox-color-icon: var(--color-gray-100);
    --checkbox-color-hover: var(--color-gray-500);
    --checkbox-color-active: var(--color-primary-400);
    --checkbox-color-focus: var(--color-primary-300);
    --checkbox-color-text: var(--color-gray-700);
    --checkbox-color-text-disabled: var(--color-gray-400);
    --checkbox-family-font: var(--font-family-primary);
    --checkbox-font-size: var(--font-size-mobile-sm);
    font-family: var(--checkbox-family-font);
  }

  :host([variant*='primary']) [part='checkbox'] {
    --checkbox-color-bg-checked: var(--color-primary-500);
    --checkbox-color-focus: var(--color-primary-300);
  }

  :host([variant*='secondary']) [part='checkbox'] {
    --checkbox-color-bg-checked: var(--color-secondary-500);
    --checkbox-color-focus: var(--color-secondary-300);
  }

  :host([variant*='tertiary']) [part='checkbox'] {
    --checkbox-color-bg-checked: var(--color-tertiary-500);
    --checkbox-color-focus: var(--color-tertiary-300);
  }

  [part='checkbox'] {
    position: relative;
  }

  [part='label'] {
    font-size: var(--checkbox-font-size);
    margin-left: 5px;
    color: var(--checkbox-color-text);
    font-weight: 300;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  /* checkbox aspect */
  [part='checkbox']:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1.4em;
    height: 1.4em;
    background: var(--checkbox-color-bg);
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  [part='checkbox']:hover:before {
    background-color: var(--checkbox-color-hover);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 rgba(0, 0, 0, 0.6);
  }

  [part='checkbox']:checked:before {
    background-color: var(--checkbox-color-bg-checked);
  }

  /* checked mark aspect */
  [part='checkbox']:after {
    content: '✕';
    position: absolute;
    top: 9px;
    left: 3px;
    font-size: 15px;
    color: var(--checkbox-color-icon);
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  /* checked mark aspect changes */
  [part='checkbox']:not(:checked):after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  /* Disabled checkbox */
  [part='checkbox']:disabled:before {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(--checkbox-color-bg-disabled);
  }

  [part='checkbox']:disabled:checked:after {
    color: var(--checkbox-color-text);
  }

  [part='checkbox']:disabled + [part='label'] {
    color: var(--checkbox-color-text-disabled);
  }

  /* Accessibility */
  [part='checkbox']:focus-visible:before,
  [part='checkbox']:active:before {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0px 0px 0px 5px var(--checkbox-color-focus);
  }

  [part='caption'] {
    display: block;
  }
`;
