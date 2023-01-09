import { getPosts, getPostLength } from "./utils/page";

async function config() {
  let getPresentDate = new Date().getFullYear();
  return {
    title: "Biodasturchi",
    description: "Biodasturchi web sahifasi",
    base: "/",
    head: head(),
    lang: "uz-Uz",
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
      lastUpdatedText: "Updated Date",
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
    },
    srcExclude: ["README.md"], // exclude the README.md , needn't to compiler
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

export default config();
