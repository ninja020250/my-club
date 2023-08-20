import defaultTheme from '../src/themes/default';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    parameters: {
      viewport: { viewports: MINIMAL_VIEWPORTS },
    },
    chakra: {
      theme: defaultTheme,
    },
  },
};

export default preview;
