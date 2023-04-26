import type { DefaultTheme } from 'vitepress'

export const en: DefaultTheme.NavItem[] = [
  { text: "Blog", link: "/pages/blog/" },
  { text: "Contact", link: "/pages/contact" },
  {
    text: "Sort",
    items: [
      {
        text: "Archive",
        link: "/pages/sort/archive",
      },
      {
        text: "Tag",
        link: "/pages/sort/tags",
      },
      {
        text: "Category",
        link: "/pages/sort/category",
      },
    ],
  },
]