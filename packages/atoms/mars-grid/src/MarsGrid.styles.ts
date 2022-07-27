import { css } from '@web-inmars/mars-core';

export const styles = css`
  :host {
    display: block;
    max-width: var(--mars-container-width, inherit);
    max-height: var(--mars-container-height, inherit);
  }

  section {
    display: var(--mars-display-grid, grid);
    max-width: var(--mars-grid-width, fit-content);
    max-height: var(--mars-grid-height, fit-content);
  }

  :host([inline]) section {
    --display-grid: inline-grid;
  }

  :host([grid-size*='full-width']) {
    --mars-grid-width: 100%;
  }

  :host([grid-size*='full-height']) {
    --mars-grid-height: 100%;
  }

  :host([grid-size='extra-large']) {
    --mars-grid-width: var(--mars-grid-width-extra-large, 1140px);
  }

  :host([grid-size='large']) {
    --mars-grid-width: var(--mars-grid-width-large, 960px);
  }

  :host([grid-size='medium']) {
    --mars-grid-width: var(--mars-grid-width-medium, 720px);
  }

  :host([grid-size='small']) {
    --mars-grid-width: var(--mars-grid-width-small, 540px);
  }
  :host([grid-size*='full-width']) {
    --mars-grid-width: 100%;
  }

  :host([grid-size*='full-height']) {
    --mars-grid-height: 100%;
  }

  :host([container-size='extra-large']) {
    --mars-container-width: var(--mars-container-width-extra-large, 1220px);
  }

  :host([container-size='large']) {
    --mars-container-width: var(--mars-container-width-large, 1000px);
  }

  :host([container-size='medium']) {
    --mars-container-width: var(--mars-container-width-medium, 800px);
  }

  :host([container-size='small']) {
    --mars-container-width: var(--mars-container-width-small, 620px);
  }

  :host([justify-items]) {
    justify-items: var(--mars-grid-justify-items);
  }
`;
