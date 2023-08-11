import { themes } from '@storybook/theming';
import React from 'react';

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {

    // darkMode: {
    //   // Override the default dark theme
    //   dark: { ...themes.dark, appBg: 'black' },
    //   // Override the default light theme
    //   light: { ...themes.normal, appBg: 'red' },
    //   current: 'light'
    // },  
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
