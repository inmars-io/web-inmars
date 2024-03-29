import { html, fixture, expect } from '@open-wc/testing';
import { MarsProgress } from '../src/MarsProgress.js';
import '../src/mars-progress.js';

describe('MarsProgress', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsProgress>(
      html`<mars-progress></mars-progress>`
    );

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsProgress>(
      html`<mars-progress title="attribute title"></mars-progress>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsProgress>(
      html`<mars-progress></mars-progress>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
