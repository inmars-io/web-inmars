import { html, fixture, expect } from '@open-wc/testing';
import { MarsDivider } from '../src/MarsDivider.js';
import '../src/mars-divider.js';

describe('MarsDivider', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsDivider>(html`<mars-divider></mars-divider>`);

    expect(el.title).to.equal('Hey there');
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MarsDivider>(html`<mars-divider></mars-divider>`);
    el.shadowRoot!.querySelector('button')!.click();
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsDivider>(
      html`<mars-divider title="attribute title"></mars-divider>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsDivider>(html`<mars-divider></mars-divider>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
