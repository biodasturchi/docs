// .vitepress/config.js
export default {
  title: "Biodasturchi",
  description: "Biodasturchi web sahifasi",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Biodasturchi",
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      {
        // Dropdown Menu
        text: "Dev",
        items: [
          { text: "Build web docs", link: "/dev/how-to-build-modern-docs-with-vitepress" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/biodasturchi" },
      { icon: "twitter", link: "https://twitter.com/ilosrim" },
      { icon: "discord", link: "https://discord.com/ilosrim" },
      // {
      //   icon: {
      //     svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
      //   },
      //   link: "https://google.com",
      // },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/" },
          { text: "Getting Started", link: "/" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/" },
          { text: "Getting Started", link: "/" },
        ],
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/" },
          { text: "Getting Started", link: "/" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 ilosrim",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
