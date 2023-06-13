import type { DefaultTheme } from 'vitepress'

export const en: DefaultTheme.Sidebar = {
  '/': [
    {
      text: "Bio",
      collapsible: true,
      collapsed: true,
      items: [
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
          text: "- Creating markdown blog with NextJS",
          link: "/posts/2022-03-07-creating-markdown-blog-with-nextjs",
        },
        {
          text: "- How to build modern docs with vitepress",
          link: "/posts/2022-01-05-how-to-build-modern-docs-with-vitepress",
        },
      ],
    },
  ],
}