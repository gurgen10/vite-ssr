import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import viteSSR from 'vite-ssr/plugin'
import getPageProps from './serverless/api/get-page-props'

export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    viteSSR(),
    Vue(),
    Pages(),
    Layouts(),
    WindiCSS(),
    VueI18n({
      include: [path.resolve(__dirname, 'src/i18n/translations/**')],
    }),
    ViteComponents(),
    {
      // API mock-up
      configureServer({ middlewares }) {
        middlewares.use('/api/get-page-props', getPageProps)
      },
    },
  ],

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
  },
})
