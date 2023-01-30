import { css } from '@web-inmars/core';

export const styles = css`
  :host {
    --mars-divider-color: var(--mars-mode-outline);
    display: block;
    width: 100%;
  }

  hr {
    margin: 0;
    border: none;
    border-top: 1px solid var(--mars-divider-color);
  }

  :host([variant='full-width']) {
    position: absolute;
    left: 0;
    right: 0;
  }

  :host([variant='vertical']) {
    display: flex;
    width: auto;
  }

  :host([variant='vertical']) hr {
    min-height: 100%;
    border-left: 1px solid var(--mars-divider-color);
    margin: 0;
  }
`;
