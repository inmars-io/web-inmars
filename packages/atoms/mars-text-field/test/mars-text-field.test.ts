import { html, fixture, expect } from '@open-wc/testing';

import { MarsTextField } from '../src/MarsTextField.js';
import '../mars-text-field.js';

describe('MarsTextField', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsTextField>(html`<mars-input></mars-input>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsTextField>(
      html`<mars-input title="attribute title"></mars-input>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsTextField>(html`<mars-input></mars-input>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
