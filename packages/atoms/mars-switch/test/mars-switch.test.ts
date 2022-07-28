import { html, fixture, expect } from '@open-wc/testing';

import { MarsSwitch } from '../src/MarsSwitch.js';
import '../src/mars-switch.js';

describe('MarsSwitch', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsSwitch>(html`<mars-switch></mars-switch>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsSwitch>(
      html`<mars-switch title="attribute title"></mars-switch>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsSwitch>(html`<mars-switch></mars-switch>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
