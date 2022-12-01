// .vitepress/config.js
export default {
  title: "Biodasturchi",
  description: "Biodasturchi web sahifasi",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Biodasturchi",
    // Navbar Link
    nav: nav(),
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/biodasturchi" },
      { icon: "twitter", link: "https://twitter.com/ilosrim" },
    ],
    // Sidebar
    sidebar: {
      '/posts/bio/': sidebarPostsBio(),
      '/posts/dev/': sidebarPostsDev(),
    },
    editLink: {
      pattern: 'https://github.com/biodasturchi/docs/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
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

function nav() {
  return [
    { text: "Home", link: "/"},
    { text: "Posts", link: "/posts/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    {
      // Dropdown Menu
      text: "Changes",
      items: [
        { text: "v1.0.0", link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.0" },
        { text: "v1.0.0", link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.1" },
      ],
    },
  ]
}

function sidebarPostsBio() {
  return [
    {
      text: 'Posts',
      items: [
        { text: 'Cav1.1 kompleks kanaliga', link: '/posts/bio/2022-11-25-docking-on-ca-complex' },
        { text: 'Ligand docking and binding site analysis', link: '/posts/bio/2022-11-29-ligand-docking-and-binding-site-analysis' },
      ]
    },
    {
      text: 'Test',
      items: [
        { text: 'Test first', link: '/'},
        { text: 'Test second', link: '/'},
        { text: 'Test thrid', link: '/'},
      ]
    }
  ]
}

function sidebarPostsDev() {
  return [
    {
      text: 'Posts',
      items: [
        { text: 'How to build modern docs with vitepress', link: '/posts/dev/2022-11-22-how-to-build-modern-docs-with-vitepress' },
        { text: 'Creating markdown blog with NextJS', link: '/posts/dev/2022-11-25-creating-markdown-blog-with-nextjs' },
      ]
    },
    {
      text: 'Test',
      items: [
        { text: 'Test first', link: '/'},
        { text: 'Test second', link: '/'},
        { text: 'Test thrid', link: '/'},
      ]
    }
  ]
}