import { html, fixture, expect } from '@open-wc/testing';
import { MarsTag } from '../src/MarsTag.js';
import '../src/mars-tag.js';

describe('MarsTag', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsTag>(html`<mars-tag></mars-tag>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsTag>(
      html`<mars-tag title="attribute title"></mars-tag>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsTag>(html`<mars-tag></mars-tag>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
