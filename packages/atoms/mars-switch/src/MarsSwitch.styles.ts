import { css } from '@web-inmars/mars-core';

export const styles = css`
  :host {
    --switch-color-bg: var(--color-gray-400);
    --switch-color-bg-checked: var(--color-primary-500);
    --switch-color-bg-checked-hover: var(--color-primary-600);
    --switch-color-bg-disabled: var(--color-gray-200);
    --switch-color-bg-hover: var(--color-gray-500);
    --switch-color-focus: var(--color-primary-300);
    --switch-color-text: var(--color-gray-700);
    --switch-color-text-disabled: var(--color-gray-400);
    --switch-family-font: var(--font-family-primary);
    --switch-font-size: var(--font-size-mobile-sm);
    --switch-content-color-bg: white;
    --switch-size-width: 65px;
    --switch-size-height: 36px;
    --switch-border-radius: 34px;
    --switch-content-size-height: 32px;
    --switch-content-size-width: 32px;
    --switch-content-position-left: 2px;
    --switch-content-position-bottom: 2px;
    --switch-translate-x: 29px;
    font-family: var(--custom-switch-family-font, var(--switch-family-font));
  }

  :host([variant*='primary']) {
    --switch-color-bg-checked: var(--color-primary-500);
    --switch-color-bg-checked-hover: var(--color-primary-600);
    --switch-color-focus: var(--color-primary-300);
  }

  :host([variant*='secondary']) {
    --switch-color-bg-checked: var(--color-secondary-500);
    --switch-color-bg-checked-hover: var(--color-secondary-600);
    --switch-color-focus: var(--color-secondary-300);
  }

  :host([variant*='tertiary']) {
    --switch-color-bg-checked: var(--color-tertiary-500);
    --switch-color-bg-checked-hover: var(--color-tertiary-600);
    --switch-color-focus: var(--color-tertiary-300);
  }

  :host([variant*='sm']) {
    --switch-size-width: 52px;
    --switch-size-height: 27px;
    --switch-border-radius: 20px;
    --switch-content-size-height: 25px;
    --switch-content-size-width: 25px;
    --switch-content-position-left: 1px;
    --switch-content-position-bottom: 1px;
    --switch-translate-x: 25px;
  }

  :host([variant*='xs']) {
    --switch-size-width: 42px;
    --switch-size-height: 22px;
    --switch-border-radius: 20px;
    --switch-content-size-height: 20px;
    --switch-content-size-width: 20px;
    --switch-content-position-left: 1px;
    --switch-content-position-bottom: 1px;
    --switch-translate-x: 20px;
  }

  label {
    display: flex;
    align-items: center;
  }

  [part='switch'] {
    position: absolute;
  }

  [part='slider'] {
    width: var(--custom-switch-size-width, var(--switch-size-width));
    height: var(--custom-switch-size-height, var(--switch-size-height));
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: var(--custom-switch-color-bg, var(--switch-color-bg));
    transition: all 0.275s;
    border-radius: var(
      --custom-switch-border-radius,
      var(--switch-border-radius)
    );
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.2);
  }

  [part='slider-content'] {
    position: absolute;
    height: var(
      --custom-switch-content-size-height,
      var(--switch-content-size-height)
    );
    width: var(
      --custom-switch-content-size-width,
      var(--switch-content-size-width)
    );
    left: var(
      --custom-switch-content-position-left,
      var(--switch-content-position-left)
    );
    bottom: var(
      --custom-switch-content-position-bottom,
      var(--switch-content-position-bottom)
    );
    background-color: var(
      --custom-switch-content-color-bg,
      var(--switch-content-color-bg)
    );
    transition: all 0.275s;
    border-radius: 50%;
  }

  [part='switch']:checked + [part='slider'] {
    background-color: var(
      --custom-switch-color-bg-checked,
      var(--switch-color-bg-checked)
    );
  }

  [part='switch']:checked:not([disabled]):hover + [part='slider'] {
    background-color: var(
      --custom-switch-color-bg-checked-hover,
      var(--switch-color-bg-checked-hover)
    );
  }

  [part='switch']:checked + [part='slider'] [part='slider-content'] {
    transform: translateX(
      var(--custom-switch-translate-x, var(--switch-translate-x))
    );
  }

  [part='label'] {
    font-size: var(--custom-switch-font-size, var(--switch-font-size));
    margin-left: 5px;
    color: var(--custom-switch-color-text, var(--switch-color-text));
    font-weight: 300;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  [part='switch']:hover + [part='slider'] {
    background-color: var(
      --custom-switch-color-bg-hover,
      var(--switch-color-bg-hover)
    );
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 rgba(0, 0, 0, 0.6);
  }

  /* Disabled checkbox */
  [part='switch']:disabled + [part='slider'] {
    box-shadow: none;
    cursor: not-allowed;
    background-color: var(
      --custom-switch-color-bg-disabled,
      var(--switch-color-bg-disabled)
    );
  }

  [part='switch']:disabled:checked [part='slider-content'] {
    color: var(--custom-switch-color-text, var(--switch-color-text));
  }

  [part='switch']:disabled ~ [part='label'] {
    color: var(
      --custom-switch-color-text-disabled,
      var(--switch-color-text-disabled)
    );
  }

  /* Accessibility */
  [part='switch']:focus-visible:not([disabled]) + [part='slider'],
  [part='switch']:active:not([disabled]) + [part='slider'] {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0px 0px 0px 5px
        var(--custom-switch-color-focus, var(--switch-color-focus));
  }

  [part='caption'] {
    display: block;
  }
`;
