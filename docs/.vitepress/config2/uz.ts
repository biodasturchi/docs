import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionUZ, github, ogImg, site } from '../meta'
import { uz as nav } from './navbar'
import { uz as sidebar } from './sidebar'

export const uzConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionUZ,

  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: 'Ushbu sahifaga o\'zgartirishlar taklif qiling',
    },
    footer: {
      message: 'MIT Litsenziyasi ostida chiqarilgan',
      copyright: `Mualliflik huquqi © 2022-${new Date().getFullYear()} Biodasturchi`,
    },
  },

  head: [
    ['meta', { name: 'twitter:description', content: descriptionUZ }],
    ['meta', { name: 'twitter:image', content: ogImg }],
    ['meta', { name: 'og:description', content: descriptionUZ }],
    ['meta', { name: 'og:url', content: site }],
    ['meta', { name: 'og:locale', content: 'uz_UZ' }],
    ['meta', { name: 'og:image', content: ogImg }],
  ],
}