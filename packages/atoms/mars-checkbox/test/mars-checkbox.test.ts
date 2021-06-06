import { html, fixture, expect } from '@open-wc/testing';

import { MarsCheckbox } from '../src/MarsCheckbox.js';
import '../mars-checkbox.js';

describe('MarsCheckbox', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsCheckbox>(html`<mars-checkbox></mars-checkbox>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MarsCheckbox>(html`<mars-checkbox></mars-checkbox>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsCheckbox>(html`<mars-checkbox title="attribute title"></mars-checkbox>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsCheckbox>(html`<mars-checkbox></mars-checkbox>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});