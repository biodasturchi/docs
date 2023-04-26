import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { uzConfig } from './uz'
import { shareConfig } from './share'

export default defineConfig({
  ...shareConfig,
  locales: {
    root: { label: 'English', lang: 'en-US', ...enConfig },
    uz: { label: 'O\'zbek', lang: 'uz-Uz', ...uzConfig },
  },
})