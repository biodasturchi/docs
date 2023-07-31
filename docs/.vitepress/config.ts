import { getPosts, getPostLength } from "./utils/page";
import { SearchPlugin } from "vitepress-plugin-search";

async function config() {
  return {
    title: "Biodasturchi",
    description: "Biodasturchi web page",
    base: "/",
    head: head(),
    lang: "en-US",
    lastUpdated: true,

    themeConfig: {
      posts: await getPosts(),
      pageSize: 5,
      postLength: await getPostLength(),
      // logo: "/logo.svg",
      siteTitle: "Biodasturchi",
      outlineTitle: "Outline title",
      repo: "biodasturchi/docs",
      nav: nav(),
      sidebar: {
        "/posts/": sidebarArticles(),
      },
      lastUpdatedText: "Last updated",
      socialLinks: [
        { icon: "github", link: "https://github.com/mirjr" },
        { icon: "twitter", link: "https://twitter.com/mirjr17" },
      ],
      editLink: {
        pattern: "https://github.com/biodasturchi/docs/blob/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      docFooter: {
        prev: "Prev",
        next: "Next",
      },
      footer: {
        message: "Released under the MIT License.",
        copyright: `Copyright © 2022-${new Date().getFullYear()} Biodasturchi`,
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
      // shiki code theme
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
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
    ['meta', { property: 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
    ["meta", { name: "author", content: "biodasturchi.uz" }],
    ["meta", { property: "og:title", content: "Home" }],
  ];
}

function nav() {
  return [
    { text: "Archive", link: "/pages/archive", },
    { text: "Tag", link: "/pages/tags", },
    { text: "Category", link: "/pages/category", },
    { text: "Contact", link: "/pages/contact" },
  ];
}

function sidebarArticles() {
  return [
    {
      text: "Bio",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "- AI search of Neanderthal proteins resurrects 'extinct' antibiotics",
          link: "/posts/2023-06-28-ai-search-of-Neanderthal-proteins-resurrects-extinct-antibiotics",
        },
        {
          text: "- L-tipli Ca1.1 va Ca 1.3 kanallariga ligand moddalarning biriktirilishi",
          link: "/posts/2023-06-13-autodock-and-vina-calsium-channel",
        },
        {
          text: "- Gromacs'ni docking va dastlabki model sistemani qurish",
          link: "/posts/2023-04-23-gmx-introduction",
        },
        {
          text: "- Mitoxondriyalarning nafas olish faoliyatini baholash",
          link: "/posts/2023-04-20-mitoxondriya-nafas-olish",
        },
        {
          text: "- AlphaFold's new rival? Meta AI predicts shape of 600 million proteins",
          link: "/posts/2022-11-01-alphafold-s-new-rival",
        },
        {
          text: "- Ligand docking and binding site analysis with pymol and autodock/vina",
          link: "/posts/2022-09-29-ligand-docking-and-binding-site-analysis",
        },
        {
          text: "- What's next for AlphaFold and the AI protein-folding revolution",
          link: "/posts/2022-04-13-ai-protein-folding-revolution",
        },
        {
          text: "- Calcium Channels in the Heart: Disease States and Drugs",
          link: "/posts/2022-03-10-calsium-channel-in-the-heart",
        },
        {
          text: "- DeepMind's AI makes gigantic leap in solving protein structures",
          link: "/posts/2020-11-30-it-will-change-everything",
        },
      ],
    },
    {
      text: "Dev",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "- Use Gitalk in Vitepress",
          link: "/posts/2023-05-06-use-gitalk-in-vitepress",
        },
        {
          text: "- Creating markdown blog with NextJS",
          link: "/posts/2022-03-07-creating-markdown-blog-with-nextjs",
        },
        {
          text: "- How to build modern docs with vitepress",
          link: "/posts/2022-01-05-how-to-build-modern-docs-with-vitepress",
        },
      ],
    },
  ];
}

export default config();