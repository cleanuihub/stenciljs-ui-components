import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'cleanuui-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www', // Needed for GitHub Pages
      serviceWorker: null, // Disable service worker if not needed
      baseUrl: 'https://cleanuihub.github.io/stenciljs-ui-components/', // Your repo pages URL
    },
  ],
};
