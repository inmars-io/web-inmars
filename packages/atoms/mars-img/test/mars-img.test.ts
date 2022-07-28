import { html, fixture, expect } from '@open-wc/testing';

import { MarsImg } from '../src/MarsImg.js';
import '../src/mars-img.js';

describe('MarsImg', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsImg>(html`<mars-img></mars-img>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsImg>(
      html`<mars-img title="attribute title"></mars-img>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsImg>(html`<mars-img></mars-img>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
