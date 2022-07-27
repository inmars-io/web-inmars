import { html, fixture, expect } from '@open-wc/testing';

import { MarsIcon } from '../src/MarsIcon.js';
import '../mars-icon.js';

describe('MarsIcon', () => {
  it('has a default title "Hey there"', async () => {
    const el = await fixture<MarsIcon>(html`<mars-icon></mars-icon>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsIcon>(
      html`<mars-icon title="attribute title"></mars-icon>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsIcon>(html`<mars-icon></mars-icon>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
