import { defineConfig } from 'vitepress'
import { baiduVerify, github, googleVerify, keywords, name, ogTitle } from '../meta'
import { SearchPlugin } from "vitepress-plugin-search";
import { getPosts, getPostLength } from "../utils/page";

export const shareConfig = async () => ({
  title: name,

  themeConfig: {
    posts: await getPosts(),
    pageSize: 5,
    postLength: await getPostLength(),
    // logo: {
    //   src: '/images/logo.png',
    //   alt: 'cz-git-logo',
    // },
    socialLinks: [
      { icon: 'github', link: github },
    ],
  },

  lastUpdated: true,
  useWebFonts: true,
  appearance: 'dark',

  vite: {
    plugins: [SearchPlugin()],
    build: {
      ssr: false,
    },
  },

  markdown: {
    // shiki code theme
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  head: [
    ['meta', { name: 'google-site-verification', content: googleVerify }],
    ['meta', { name: 'baidu-site-verification', content: baiduVerify }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Zhengqbbb' }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:creator', content: '@zhengqbbb' }],
    ['meta', { name: 'twitter:site', content: '@zhengqbbb' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/images/logo.svg', color: '#dd6954' }],
    ['meta', { name: 'theme-color', content: '#dd6954' }],

    // To IPhone icon: https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-120x120.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
  ],
})