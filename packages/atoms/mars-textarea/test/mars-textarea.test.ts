import { html, fixture, expect } from '@open-wc/testing';

import { MarsTextarea } from '../src/MarsTextarea.js';
import '../mars-textarea.js';

describe('MarsTextarea', () => {
  it('has a default title "Hey there"', async () => {
    const el = await fixture<MarsTextarea>(
      html`<mars-textarea></mars-textarea>`
    );

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsTextarea>(
      html`<mars-textarea title="attribute title"></mars-textarea>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsTextarea>(
      html`<mars-textarea></mars-textarea>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
