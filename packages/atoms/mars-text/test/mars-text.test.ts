import { html, fixture, expect } from '@open-wc/testing';

import { MarsText } from '../src/MarsText.js';
import '../mars-text.js';

describe('MarsText', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsText>(html`<mars-text></mars-text>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsText>(
      html`<mars-text title="attribute title"></mars-text>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsText>(html`<mars-text></mars-text>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
