import { newE2EPage } from '@stencil/core/testing';

describe('search-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<search-button></search-button>');

    const element = await page.find('search-button');
    expect(element).toHaveClass('hydrated');
  });
});
