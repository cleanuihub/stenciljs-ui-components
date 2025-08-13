import { newSpecPage } from '@stencil/core/testing';
import { SearchButton } from '../search-button';

describe('search-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchButton],
      html: `<search-button></search-button>`,
    });
    expect(page.root).toEqualHtml(`
      <search-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </search-button>
    `);
  });
});
