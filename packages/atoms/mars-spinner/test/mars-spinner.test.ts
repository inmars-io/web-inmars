import { html, fixture, expect } from '@open-wc/testing';
import { MarsSpinner } from '../src/MarsSpinner.js';
import '../src/mars-spinner.js';

describe('MarsSpinner', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsSpinner>(html`<mars-spinner></mars-spinner>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MarsSpinner>(html`<mars-spinner></mars-spinner>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsSpinner>(
      html`<mars-spinner title="attribute title"></mars-spinner>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsSpinner>(html`<mars-spinner></mars-spinner>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
