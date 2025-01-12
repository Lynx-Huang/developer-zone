/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'Getting Started',
    {
      'Overview': [
        'Overview/Introduction',
        'Overview/Properties',
        'Overview/States',
        'Overview/Commands',
        'Overview/Alerts',
        'Overview/Metrics',
        'Overview/Events',
        'Overview/Configs',
      ],
    },
    'Create a Plugin',
  ],
  api: [
    'API Reference',
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
