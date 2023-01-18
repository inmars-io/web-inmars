import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --_avatar-family-font: var(--font-family-primary);
    --_avatar-abbr-size: var(--mars-avatar-abbr-size, 24px);

    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    font-family: var(--_avatar-family-font);
    background-color: var(--_avatar-color-bg, var(--color-gray-500));
  }

  [part='img'] {
    width: 100%;
    height: 100%;
  }

  [part='abbr'] {
    text-decoration: none;
    font-size: var(--_avatar-abbr-size);
  }

  [part='default'] {
    opacity: 0.5;
  }
`;
