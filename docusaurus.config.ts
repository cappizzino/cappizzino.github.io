import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // ---- Site identity ----
  title: 'Carlos A P Pizzino',
  tagline: 'Robotics Developer • Researcher (ROS, C++/Python)',
  favicon: 'img/robot.ico',

  // ---- Deployment (GitHub Pages user site) ----
  url: 'https://cappizzino.github.io',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'cappizzino',
  projectName: 'cappizzino.github.io',

  // Fail fast in CI to avoid shipping broken navigation/routes
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ---- Search ----
  plugins: [require.resolve('docusaurus-lunr-search')],

  // ---- Preset ----
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          path: 'docs',
          routeBasePath: 'docs',

          lastVersion: undefined,
          includeCurrentVersion: true,
        },

        blog: {
          blogTitle: 'Notes',
          blogDescription:
            'Robotics engineering notes, experiments, benchmarks, and research write-ups.',
          showReadingTime: true,
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  // ---- Math typesetting ----
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // ---- Theme / UI ----
  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {
        name: 'keywords',
        content:
          'robotics, ROS2, ROS Noetic, C++, Python, perception, SLAM, navigation, manipulation, control, autonomy',
      },
      {name: 'author', content: 'Carlos A P Pizzino'},
    ],

    navbar: {
      title: 'Carlos A P Pizzino',
      logo: {
        alt: 'Carlos A P Pizzino',
        src: 'img/robot.svg',
      },
      items: [
        // Docs pages (these must exist as docs routes)
        {to: '/docs/projects', label: 'Projects', position: 'left'},
        {to: '/docs/publications', label: 'Publications', position: 'left'},

        {to: '/blog', label: 'Notes', position: 'left'},

        {href: '/files/CV.pdf', label: 'CV', position: 'right', target: '_blank', rel: 'noopener noreferrer'},

        {href: 'https://github.com/cappizzino', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/in/cappizzino/', label: 'LinkedIn', position: 'right'},
        {href: 'https://scholar.google.com/citations?user=1UAr5RMAAAAJ&hl=pt-BR', label: 'Scholar', position: 'right'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Work',
          items: [
            // ✅ FIX: point to real existing routes
            {label: 'Projects', to: '/docs/projects'},
            {label: 'Publications', to: '/docs/publications'},

            // Prefer a real docs landing page if you have one; otherwise /docs will be broken.
            // If you don't have a docs homepage, create docs/intro.md and set it as the docs "index"
            // then link to /docs/intro here.
            {label: 'Docs', to: '/docs/projects'}, // safe default that exists in your build output

            {label: 'Notes', to: '/blog'},
          ],
        },
        {
          title: 'Profiles',
          items: [
            {label: 'GitHub', href: 'https://github.com/cappizzino'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/cappizzino/'},
            {label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=1UAr5RMAAAAJ&hl=pt-BR'},
            {label: 'ORCID', href: 'https://orcid.org/0000-0002-7577-3003'},
          ],
        },
        {
          title: 'Contact',
          items: [{label: 'Email', href: 'mailto:cappizzino@gmail.com'}],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Carlos A P Pizzino`,
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp', 'cmake', 'python', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
