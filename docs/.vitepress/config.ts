import { getPosts, getPostLength } from "./utils/page";
import { SearchPlugin } from "vitepress-plugin-search";

async function config() {
  let getPresentDate = new Date().getFullYear();
  return {
    title: "Biodasturchi",
    description: "Biodasturchi web sahifasi",
    base: "/",
    head: head(),
    lang: "uz-UZ",
    lastUpdated: true,

    themeConfig: {
      posts: await getPosts(),
      pageSize: 3,
      postLength: await getPostLength(),
      // logo: "/logo.svg",
      siteTitle: "Biodasturchi",
      outlineTitle: "Kontur",
      repo: "biodasturchi/docs",
      nav: nav(),
      sidebar: {
        "/posts/": sidebarArticles(),
      },
      lastUpdatedText: "Last updated",
      socialLinks: [
        { icon: "github", link: "https://github.com/biodasturchi" },
        // { icon: "twitter", link: "https://twitter.com/ilosrim" },
      ],
      editLink: {
        pattern: "https://github.com/biodasturchi/docs/blob/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      docFooter: {
        prev: "Oldingi",
        next: "Keyingi",
      },
      footer: {
        message: "MIT litsenziyasi ostida chiqarilgan.",
        copyright: `Mualliflik huquqi © 2022-${getPresentDate} Biodasturchi`,
      },
      algolia: {
        appId: "H0YF5SCEHL",
        apiKey: "9ef4af6a5248d35c24de605dac8915b8",
        indexName: "blog_info",
      },
      commentConfig: {
        type: "gitalk",
        showComment: true,
      },
    },
    vite: {
      plugins: [SearchPlugin()],
      build: {
        ssr: false,
      },
    },
    srcExclude: ["README.md"],
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  };
}

function head() {
  return [
    ["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }],
    // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
      },
    ],
    // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    // ['meta', { property: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
    ["meta", { name: "author", content: "biodasturchi.uz" }],
    ["meta", { property: "og:title", content: "Home" }],
  ];
}

function nav() {
  return [
    { text: "Blog", link: "/pages/blog" },
    { text: "Haqida", link: "/pages/about" },
    { text: "Kontakt", link: "/pages/contact" },
    {
      text: "Saralash",
      items: [
        {
          text: "Arxiv",
          link: "/pages/sort/archives",
        },
        {
          text: "Teglar",
          link: "/pages/sort/tags",
        },
        {
          text: "Turkumlar",
          link: "/pages/sort/category",
        },
      ],
    },
    // { text: "About", link: "/pages/about" },
    // {
    //   // Dropdown Menu
    //   text: "O'zgarishlar",
    //   items: [
    //     {
    //       text: "v1.0.0",
    //       link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.0",
    //     },
    //     {
    //       text: "v1.0.1",
    //       link: "https://github.com/biodasturchi/docs/releases/tag/v1.0.1",
    //     },
    //     {
    //       text: "v2.0.0",
    //       link: "https://github.com/biodasturchi/docs/releases/tag/v2.0.0",
    //     },
    //   ],
    // },
  ];
}

function sidebarArticles() {
  return [
    {
      text: "Articles",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "Ligand docking and binding site analysis with pymol and autodock/vina",
          link: "/posts/2022-09-29-ligand-docking-and-binding-site-analysis",
        },
        {
          text: "Cav1.1 kanaliga ligand sifatida cynaroside moddasining kiritilishi.",
          link: "/posts/2022-06-03-docking-on-ca-complex",
        },
        {
          text: "Creating markdown blog with NextJS",
          link: "/posts/2022-03-07-creating-markdown-blog-with-nextjs",
        },
        {
          text: "How to build modern docs with vitepress",
          link: "/posts/2022-01-05-how-to-build-modern-docs-with-vitepress",
        },
      ],
    },
  ];
}

export default config();
