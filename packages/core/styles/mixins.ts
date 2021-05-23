import { css } from 'lit-element';

export function calcRemMixin(size: number){
    return css`${size / 16}rem`
}