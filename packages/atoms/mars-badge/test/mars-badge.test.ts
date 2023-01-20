import { html, fixture, expect } from '@open-wc/testing';
import { MarsBadge } from '../src/MarsBadge.js';
import '../src/mars-badge.js';

describe('MarsBadge', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsBadge>(html`<mars-badge></mars-badge>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsBadge>(
      html`<mars-badge title="attribute title"></mars-badge>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsBadge>(html`<mars-badge></mars-badge>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
