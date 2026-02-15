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
  // For a user site repo: https://<username>.github.io with baseUrl '/'
  url: 'https://cappizzino.github.io',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'cappizzino', // your GitHub username
  projectName: 'cappizzino.github.io', // your repo name (user site)

  // Fail fast in CI to avoid shipping broken navigation/routes
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // ---- Search ----
  // Keep one Lunr plugin to avoid conflicts/duplication.
  plugins: [require.resolve('docusaurus-lunr-search')],

  // ---- Preset ----
  presets: [
    [
      'classic',
      {
        // Use docs for longer-form “Lab Notes / Tutorials / Writing”
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          // Keep docs at /docs (portfolio pages like /about live in src/pages)
          path: 'docs',
          routeBasePath: 'docs',

          // Simplify: disable versioned docs for a personal site.
          // If you want versioning later, re-enable and configure versions again.
          lastVersion: undefined,
          includeCurrentVersion: true,
        },

        // Use blog for shorter “Engineering Notes / Updates”
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
          // Enforce decent author/tag hygiene
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
    // Social share preview image (place at: static/img/social-card.png)
    image: 'img/social-card.png',

    // Basic SEO metadata
    metadata: [
      {
        name: 'keywords',
        content:
          'robotics, ROS2, ROS Noetic, C++, Python, perception, SLAM, navigation, manipulation, control, autonomy',
      },
      {name: 'author', content: 'Carlos A P Pizzino'},
    ],

    // Optional: enable if you want a “status” banner (hiring/collab/etc.)
    // announcementBar: {
    //   id: 'status',
    //   content:
    //     'Open to collaborations in robotics software (ROS, C++/Python). <a href="/about#contact">Contact</a>.',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },

    navbar: {
      title: 'Carlos A P Pizzino',
      // Put a clean logo at static/img/logo.svg (optional)
      logo: {
        alt: 'Carlos A P Pizzino',
        src: 'img/robot.svg',
      },
      items: [
        // These pages should be created under src/pages:
        //   src/pages/about.(md|mdx|tsx)
        //   src/pages/projects.(md|mdx|tsx)
        //   src/pages/publications.(md|mdx|tsx)
        // {to: '/about', label: 'About', position: 'left'},
        {to: 'docs/projects', label: 'Projects', position: 'left'},
        {to: 'docs/publications', label: 'Publications', position: 'left'},

        // Long-form content under /docs
        // {to: '/docs', label: 'Docs', position: 'left'},

        // Short-form notes under /blog
        {to: '/blog', label: 'Notes', position: 'left'},

        // Put CV at: static/files/CV.pdf
        {href: '/files/CV.pdf', label: 'CV', position: 'right', target: '_blank', rel: 'noopener noreferrer',},

        // External profiles
        {href: 'https://github.com/cappizzino', label: 'GitHub', position: 'right'},
        // Replace placeholders with your real URLs (or remove)
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
            {label: 'Projects', to: '/projects'},
            {label: 'Publications', to: '/publications'},
            {label: 'Docs', to: '/docs'},
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
          items: [
            {label: 'Email', href: 'mailto:cappizzino@gmail.com'},
            // Optional scheduling link
            // {label: 'Calendar', href: 'https://cal.com/<your-handle>'},
          ],
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
