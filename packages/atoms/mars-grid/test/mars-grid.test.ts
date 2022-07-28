import { html, fixture, expect } from '@open-wc/testing';

import { MarsGrid } from '../src/MarsGrid.js';
import '../src/mars-grid.js';

describe('MarsGrid', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsGrid>(html`<mars-grid></mars-grid>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsGrid>(
      html`<mars-grid title="attribute title"></mars-grid>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsGrid>(html`<mars-grid></mars-grid>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
