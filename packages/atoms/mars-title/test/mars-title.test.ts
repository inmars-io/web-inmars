import { html, fixture, expect } from '@open-wc/testing';

import { MarsTitle } from '../src/MarsTitle.js';
import '../mars-title.js';

describe('MarsTitle', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsTitle>(html`<mars-title></mars-title>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsTitle>(
      html`<mars-title title="attribute title"></mars-title>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsTitle>(html`<mars-title></mars-title>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
