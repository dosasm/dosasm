const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DOSASM',
  tagline: 'some references and tools for assembly in DOS. Dinosaurs are cool!',
  url: 'https://dosasm.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dosasm', // Usually your GitHub org/user name.
  projectName: 'dosasm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DosAsm',
      logo: {
        alt: 'My Site Logo',
        src: 'img/dosboxasm.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'reference',
          position: 'left',
          label: 'Reference',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://dosasm.gitee.io/react-app',
          label: 'PlayGround',
          position: 'right',
        },
        {
          href: 'https://github.com/dosasm/dosasm',
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
            {
              label: 'References',
              to: '/docs/reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/dosasm',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/dosasm/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Docusaurus',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Js-Dos',
              href: 'https://js-dos.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DosAsm Project. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path:'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math,require('mdx-mermaid')],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl:
            'https://github.com/dosasm/dosasm/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dosasm/dosasm/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
