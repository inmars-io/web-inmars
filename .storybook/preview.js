import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';

setCustomElementsManifest(customElementsManifest);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...INITIAL_VIEWPORTS },
  },
  darkMode: {
    current: 'light',
  },
};
