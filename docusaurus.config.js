// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Infinity Pool",
  tagline:
    "An open source, opinionated DAO operations guide using Orca Protocol.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "∞ Pool", // Usually your GitHub org/user name.
  projectName: "∞ Pool", // Usually your repo name.
  favicon: "/img/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/metabee530/dao-ops-guide",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/metabee530/dao-ops-guide/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "∞ Pool",
        items: [
          { to: "/", label: "Overview", position: "left" },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guide",
          },
          { to: "/blog", label: "Insights", position: "left" },
          {
            href: "https://github.com/metabee530",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guide",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Twitter",
                href: "#",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/metabee530/",
              },
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
