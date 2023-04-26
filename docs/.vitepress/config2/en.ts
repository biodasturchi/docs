import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { descriptionEN, github, ogImg, site } from '../meta'
import { en as nav } from './navbar'
import { en as sidebar } from './sidebar'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionEN,

  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: 'Suggest changes to this page',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Biodasturchi`,
    },
  },

  head: [
    ['meta', { name: 'twitter:description', content: descriptionEN }],
    ['meta', { name: 'twitter:image', content: ogImg }],
    ['meta', { name: 'og:description', content: descriptionEN }],
    ['meta', { name: 'og:url', content: site }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: ogImg }],
  ],
}