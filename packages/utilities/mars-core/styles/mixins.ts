import { css } from 'lit';

export function calcRemMixin(size: number) {
  return css`
    ${size / 16}rem
  `;
}
