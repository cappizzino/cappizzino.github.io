import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fortis Documentation',
  tagline: 'Fortis Documentation and more',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cappizzino.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fortis', // Usually your GitHub org/user name.
  projectName: 'fortis', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    // ...
    '@aldridged/docusaurus-plugin-lunr',
    require.resolve('docusaurus-lunr-search')
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // editUrl: 'https://github.com',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          lastVersion: 'current',

          includeCurrentVersion: true,

          path: 'docs',
          routeBasePath: 'docs',

          versions: {
            'current': {
              label: '1.0.0',
            },
          },

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // editUrl: 'https://github.com',

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/FORTIS1.png',
    navbar: {
      title: 'Fortis',
      logo: {
        alt: 'Fortis Logo',
        src: 'img/FORTIS1.png',
        srcDark: 'img/FORTIS1.png', // Dark mode logo
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/cappizzino',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://fortis-project.eu',
          label: 'Fortis',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Shortcuts',
        //   items: [
        //     {
        //       label: 'Installation',
        //       to: '/docs/installation',
        //     },
        //     {
        //       label: 'API',
        //       to: '/docs/api',
        //     },
        //     {
        //       label: 'Simulation',
        //       to: '/docs/simulations',
        //     }
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com',
        //     },
        //     {
        //       label: 'Fortis',
        //       href: 'fortis-project.eu',
        //     }
        //   ],
        // },
        {
          title: 'Ask the developers',
          items: [
            {
              label: 'Ingeniarius',
              href: 'https://ingeniarius.pt',
            },
            {
              label: 'Fortis GitHub Team',
              href: 'https://github.com',
            }
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} CTU MRS, Inc. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
