import { html, fixture, expect } from '@open-wc/testing';

import { MarsButton } from '../src/MarsButton.js';
import '../mars-button.js';

describe('MarsButton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsButton>(html`<mars-button></mars-button>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsButton>(
      html`<mars-button title="attribute title"></mars-button>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsButton>(html`<mars-button></mars-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
