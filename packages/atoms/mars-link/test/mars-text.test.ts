import { html, fixture, expect } from '@open-wc/testing';

import { MarsLink } from '../src/MarsLink.js';
import '../src/mars-link.js';

describe('MarsLink', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsLink>(html`<mars-link></mars-link>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsLink>(
      html`<mars-link title="attribute title"></mars-link>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsLink>(html`<mars-link></mars-link>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
