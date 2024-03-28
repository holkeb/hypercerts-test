// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hypercerts Foundation',
  tagline: 'Hypercerts are the web3 standard for impact certificates.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hypercerts Foundation', // Usually your GitHub org/user name.
  projectName: 'hypercerts', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'HYPERCERTS',
        logo: {
          alt: 'hypercerts logo',
          src: 'img/hypercerts_logo_b_transparent.png',
        },
        items: [
          {
            to: '/how-it-works',
            label: 'How it works',
            position: 'left',
          },
          {
            to: '/ecosystem',
            label: 'Ecosystem',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://hypercerts.org/app/create#name=The%20name%20of%20your%20hypercert&logoUrl=https%3A%2F%2Fi.imgur.com%2FsDQhp3Y.png&bannerUrl=https%3A%2F%2Fi.imgur.com%2FwsM3fWd.jpeg&impactScopes%5B0%5D=all&impactTimeEnd=indefinite&workScopes=your%20project&workTimeStart=2023-01-01&rights%5B0%5D=Public%20Display&backgroundColor=blue&backgroundVectorArt=contours',
            position: 'right',
            label: 'Go to app',
            className: 'menuButton',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Hypercerts logo',
          src: 'img/hypercerts_logo_b_transparent.png',
          href: 'https://hypercerts.org',
          width: '50px',
          height: '50px',
        },
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Ecosystem',
                to: '/ecosystem',
              },
              {
                label: 'Contributors',
                to: '/contributors',
              },
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/UZt8cBnP4w',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hypercerts-org/hypercerts',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+YF9AYb6zCv1mNDJi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hypercerts',
              },
            ],
          },
        ],
        copyright: `
        <a href="/privacy">Privacy policy</a> |
        <a href="/terms">Terms of use</a> <br>
          Copyright © ${new Date().getFullYear()} Hypercerts Foundation
          `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
