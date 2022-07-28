import { html, fixture, expect } from '@open-wc/testing';
import { MarsRange } from '../src/MarsRange.js';
import '../src/mars-range.js';

describe('MarsRange', () => {
  it('has a default value "Hey there" and min 5', async () => {
    const el = await fixture<MarsRange>(html`<mars-range></mars-range>`);

    expect(el.value).to.equal('Hey there');
    expect(el.min).to.equal('5');
  });

  it('increases the min on button click', async () => {
    const el = await fixture<MarsRange>(html`<mars-range></mars-range>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.min).to.equal('6');
  });

  it('can override the value via attribute', async () => {
    const el = await fixture<MarsRange>(
      html`<mars-range value="attribute value"></mars-range>`
    );

    expect(el.value).to.equal('attribute value');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsRange>(html`<mars-range></mars-range>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
