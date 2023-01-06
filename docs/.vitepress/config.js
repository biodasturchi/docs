// .vitepress/config.js
export default {
  title: "Biodasturchi",
  description: "Biodasturchi web sahifasi",
  lastUpdated: true,

  themeConfig: {
    lang: "en-US",
    // logo: "/logo.svg",
    title: "Biodasturchi",
    website: "https://github.com/biodasturchi/docs",
    // Navbar Link
    nav: nav(),
    // Social Icons
    socialLinks: [{ icon: "github", link: "https://github.com/biodasturchi" }],
    // Sidebar
    sidebar: {
      "/posts/": sidebarPosts(),
    },
    editLink: {
      pattern: "https://github.com/biodasturchi/docs/blob/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdate: true,
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2022 ilosrim",
    // },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};

function nav() {
  return [
    { text: "Uy", link: "/" },
    { text: "Postlar", link: "/pages/posts" },
    { text: "Haqida", link: "/pages/about" },
    { text: "Aloqa", link: "/pages/contact" },
    {
      // Dropdown Menu
      text: "O'zgarishlar",
      items: [
        {
          text: "v1.0.0",
          link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.0",
        },
        {
          text: "v1.0.1",
          link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.1",
        },
      ],
    },
  ];
}

function sidebarPosts() {
  return [
    {
      text: "Posts",
      items: [
        {
          text: "Cav1.1 kompleks kanaliga",
          link: "/posts/2022-11-25-docking-on-ca-complex",
        },
        {
          text: "Ligand docking and binding site analysis",
          link: "/posts/2022-11-29-ligand-docking-and-binding-site-analysis",
        },
        {
          text: "How to build modern docs with vitepress",
          link: "/posts/2022-11-22-how-to-build-modern-docs-with-vitepress",
        },
        {
          text: "Creating markdown blog with NextJS",
          link: "/posts/2022-11-25-creating-markdown-blog-with-nextjs",
        },
      ],
    },
  ];
}
