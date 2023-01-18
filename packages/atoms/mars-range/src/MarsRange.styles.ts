import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    display: block;
    width: 100%;
    --_range-color: var(--mars-range-color, var(--color-primary-500));
    --_range-color-hover: var(
      --mars-range-color-hover,
      var(--color-primary-600)
    );
    --_range-color-active: var(
      --mars-range-color-active,
      var(--color-primary-400)
    );
    --_range-color-focus: var(
      --mars-range-color-focus,
      var(--color-primary-300)
    );
    --_range-color-bg: var(--mars-range-color-bg, var(--color-gray-500));
    --_range-size: var(--mars-range-size, 32px);
    --_range-height-size: var(--mars-range-height-size, 12px);
    --_range-family-font: var(
      --mars-range-family-font,
      var(--font-family-primary)
    );
    --_range-font-size: var(--mars-range-font-size, var(--font-size-mobile-sm));
    font-family: var(--mars-range-color, var(--_range-family-font));
  }

  label {
    display: block;
    font-size: var(--_range-font-size);
  }

  :host([variant*='primary']) [part='range'] {
    --_range-color: var(--mars-range-color, var(--color-primary-500));
    --_range-color-hover: var(
      --mars-range-color-hover,
      var(--color-primary-600)
    );
    --_range-color-active: var(
      --mars-range-color-active,
      var(--color-primary-400)
    );
    --_range-color-focus: var(
      --mars-range-color-focus,
      var(--color-primary-300)
    );
    --_range-color-bg: var(--mars-range-color-bg, var(--color-gray-500));
  }

  :host([variant*='secondary']) [part='range'] {
    --_range-color: var(--mars-range-color, var(--color-secondary-500));
    --_range-color-hover: var(
      --mars-range-color-hover,
      var(--color-secondary-600)
    );
    --_range-color-active: var(
      --mars-range-color-active,
      var(--color-secondary-400)
    );
    --_range-color-focus: var(
      --mars-range-color-focus,
      var(--color-secondary-300)
    );
  }

  :host([variant*='tertiary']) [part='range'] {
    --_range-color: var(--mars-range-color, var(--color-tertiary-500));
    --_range-color-hover: var(
      --mars-range-color-hover,
      var(--color-tertiary-600)
    );
    --_range-color-active: var(
      --mars-range-color-active,
      var(--color-tertiary-400)
    );
    --_range-color-focus: var(
      --mars-range-color-focus,
      var(--color-tertiary-300)
    );
  }

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    border-radius: 5px;
    background: var(--_range-color-bg);
    cursor: pointer;
    outline: none;
    margin-top: 8px;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: var(--_range-size);
    height: var(--_range-size);
    border-radius: 50%;
    background: var(--_range-color);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  input::-moz-slider-thumb {
    width: var(--_range-size);
    height: var(--_range-size);
    border-radius: 50%;
    background: var(--_range-color);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  input::-webkit-slider-thumb:hover:not([disabled]) {
    background: var(--_range-color-hover);
  }

  input::-moz-slider-thumb:hover:not([disabled]) {
    background: var(--_range-color-hover);
  }

  input::-webkit-slider-thumb:active:not([disabled]) {
    background: var(--_range-color-active);
  }

  input::-moz-slider-thumb:active:not([disabled]) {
    background: var(--_range-color-active);
  }

  input::-webkit-slider-thumb:focus:not([disabled]) {
    background: var(--_range-color-focus);
  }

  input::-moz-slider-thumb:focus:not([disabled]) {
    background: var(--_range-color-focus);
  }
`;
