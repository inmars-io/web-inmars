import { css } from '@web-inmars/mars-core';

export const styles = css`
  :host {
    --switch-color-bg: var(--color-gray-400);
    --switch-color-bg-checked: var(--color-primary-500);
    --switch-color-bg-disabled: var(--color-gray-200);
    --switch-color-icon: var(--color-gray-100);
    --switch-color-hover: var(--color-gray-500);
    --switch-color-active: var(--color-primary-400);
    --switch-color-focus: var(--color-primary-300);
    --switch-color-text: var(--color-gray-700);
    --switch-color-text-disabled: var(--color-gray-400);
    --switch-family-font: var(--font-family-primary);
    --switch-font-size: var(--font-size-mobile-sm);
    font-family: var(--switch-family-font);
  }

  :host([variant*='primary']) {
    --switch-color-bg-checked: var(--color-primary-500);
    --switch-color-focus: var(--color-primary-300);
  }

  :host([variant*='secondary']) {
    --switch-color-bg-checked: var(--color-secondary-500);
    --switch-color-focus: var(--color-secondary-300);
  }

  :host([variant*='tertiary']) {
    --switch-color-bg-checked: var(--color-tertiary-500);
    --switch-color-focus: var(--color-tertiary-300);
  }

  [part='label'] {
    font-size: var(--switch-font-size);
    margin-left: 5px;
    color: var(--switch-color-text);
    font-weight: 300;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  [part='switch']:hover + [part='slider'] {
    background-color: var(--switch-color-hover);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 rgba(0, 0, 0, 0.6);
  }

  /* Disabled checkbox */
  [part='switch']:disabled + [part='slider'] {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(--switch-color-bg-disabled);
  }

  [part='switch']:disabled:checked [part='slider']:before {
    color: var(--switch-color-text);
  }

  [part='switch']:disabled ~ [part='label'] {
    color: var(--switch-color-text-disabled);
  }

  /* Accessibility */
  [part='switch']:focus-visible:not([disabled]) + [part='slider'],
  [part='switch']:active:not([disabled]) + [part='slider'] {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0px 0px 0px 5px var(--switch-color-focus);
  }

  [part='caption'] {
    display: block;
  }

  label {
    display: flex;
    align-items: center;
  }

  [part='switch'] {
    position: absolute;
  }

  [part='slider'] {
    width: 65px;
    height: 36px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: var(--switch-color-bg);
    transition: all 0.275s;
    border-radius: 34px;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.2);
  }

  [part='slider']:before {
    position: absolute;
    content: '';
    height: 32px;
    width: 32px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: all 0.275s;
    border-radius: 50%;
  }

  [part='switch']:checked + [part='slider'] {
    background-color: var(--switch-color-bg-checked);
  }

  [part='switch']:checked + [part='slider']:before {
    transform: translateX(29px);
  }
`;
