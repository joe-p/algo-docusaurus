// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        id: 'tealscript',
        tsconfig: 'submodules/tealscript/tsconfig.json',
        excludeInternal: true,
        plugin: ["typedoc-plugin-merge-modules"],
        out: 'tealscript/api'
      },
    ],
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        tsconfig: 'submodules/js-algorand-sdk/tsconfig.json',
        excludeExternals: true,
        entryPoints: ["submodules/js-algorand-sdk/src/main.ts"],
        entryPointStrategy: "expand",
        out: "js-algorand-sdk"
      },
    ],
  ],
  title: 'TEALScript',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'algorand-devrel', // Usually your GitHub org/user name.
  projectName: 'tealscript', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Algorand',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'core',
            position: 'left',
            label: 'Core Docs',
          },
          {
            type: 'dropdown',
            label: 'Algokit Libraries',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'algokit-utils-ts',
                label: 'TypeScript Utils',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'SDKs',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'js-algorand-sdk',
                label: 'JavaScript SDK',
              },
              {
                type: 'docSidebar',
                sidebarId: 'py-algorand-sdk',
                label: 'Python SDK',
              },
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'tealscript',
            position: 'left',
            label: 'TEALScript',
          },
          {
            href: 'https://github.com/algorand-devrel/tealscript',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/algorand',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/algodevs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/algorand-devrel/tealscript',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
