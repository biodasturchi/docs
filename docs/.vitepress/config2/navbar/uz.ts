import type { DefaultTheme } from 'vitepress'

export const uz: DefaultTheme.NavItem[] = [
  { text: "Blog", link: "/uz/pages/blog" },
  { text: "Kontakt", link: "/uz/pages/contact" },
  {
    text: "Saralash",
    items: [
      {
        text: "Arxiv",
        link: "/uz/pages/sort/archive",
      },
      {
        text: "Teg",
        link: "/uz/pages/sort/tags",
      },
      {
        text: "Kategoriya",
        link: "/uz/pages/sort/category",
      },
    ],
  },
]