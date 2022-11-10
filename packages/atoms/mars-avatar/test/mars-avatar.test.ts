import { html, fixture, expect } from '@open-wc/testing';
import { MarsAvatar } from '../src/MarsAvatar.js';
import '../src/mars-avatar.js';

describe('MarsAvatar', () => {
  it('has a default name "Hey there" and counter 5', async () => {
    const el = await fixture<MarsAvatar>(html`<mars-avatar></mars-avatar>`);

    expect(el.name).to.equal('Hey there');
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MarsAvatar>(html`<mars-avatar></mars-avatar>`);
    el.shadowRoot!.querySelector('button')!.click();
  });

  it('can override the name via attribute', async () => {
    const el = await fixture<MarsAvatar>(
      html`<mars-avatar name="attribute name"></mars-avatar>`
    );

    expect(el.name).to.equal('attribute name');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsAvatar>(html`<mars-avatar></mars-avatar>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
