import { html, fixture, expect } from '@open-wc/testing';

import { MarsRadioButton } from '../src/MarsRadioButton.js';
import '../src/mars-radio-button.js';

describe('MarsRadioButton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsRadioButton>(html`<mars-radio></mars-radio>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsRadioButton>(
      html`<mars-radio title="attribute title"></mars-radio>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsRadioButton>(html`<mars-radio></mars-radio>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
