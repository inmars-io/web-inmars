import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --radiobutton-color-bg: var(--color-gray-300);
    --radiobutton-color-bg-checked: var(--color-primary-500);
    --radiobutton-color-bg-disabled: var(--color-gray-200);
    --radiobutton-color-icon: var(--color-gray-100);
    --radiobutton-color-hover: var(--color-gray-500);
    --radiobutton-color-active: var(--color-primary-400);
    --radiobutton-color-focus: var(--color-primary-300);
    --radiobutton-color-text: var(--color-gray-700);
    --radiobutton-color-text-disabled: var(--color-gray-400);
    --radiobutton-family-font: var(--font-family-primary);
    --radiobutton-font-size: var(--font-size-mobile-sm);
    font-family: var(--radiobutton-family-font);
  }

  :host([variant*='primary']) [part='radiobutton'] {
    --radiobutton-color-bg-checked: var(--color-primary-500);
    --radiobutton-color-focus: var(--color-primary-300);
  }

  :host([variant*='secondary']) [part='radiobutton'] {
    --radiobutton-color-bg-checked: var(--color-secondary-500);
    --radiobutton-color-focus: var(--color-secondary-300);
  }

  :host([variant*='tertiary']) [part='radiobutton'] {
    --radiobutton-color-bg-checked: var(--color-tertiary-500);
    --radiobutton-color-focus: var(--color-tertiary-300);
  }

  [part='radiobutton'] {
    position: relative;
  }

  [part='label-box'] {
    display: inline-flex;
    align-items: baseline;
  }

  [part='label'] {
    font-size: var(--radiobutton-font-size);
    margin-left: 5px;
    color: var(--radiobutton-color-text);
    font-weight: 300;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  /* radiobutton aspect */
  [part='radiobutton']:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 18px;
    height: 18px;
    background: var(--radiobutton-color-bg);
    border-radius: 100%;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  [part='radiobutton']:hover:before {
    background-color: var(--radiobutton-color-hover);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 rgba(0, 0, 0, 0.6);
  }

  [part='radiobutton']:checked:before {
    background-color: var(--radiobutton-color-bg-checked);
  }

  /* checked mark aspect */
  [part='radiobutton']:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid var(--radiobutton-color-icon);
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  /* checked mark aspect changes */
  [part='radiobutton']:not(:checked):after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  /* Disabled radiobutton */
  [part='radiobutton']:disabled:before {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(--radiobutton-color-bg-disabled);
  }

  [part='radiobutton']:disabled:checked:after {
    color: var(--radiobutton-color-text);
  }

  [part='radiobutton']:disabled + [part='label'] {
    color: var(--radiobutton-color-text-disabled);
  }

  /* Accessibility */
  [part='radiobutton']:focus-visible:not([disabled]):before,
  [part='radiobutton']:active:not([disabled]):before {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0px 0px 0px 5px var(--radiobutton-color-focus);
  }

  [part='caption'] {
    display: block;
  }
`;
