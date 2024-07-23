import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/api/configuration/nuxt-config
export default defineNuxtConfig({
  // HTTPモジュールの設定
  modules: ['@nuxt/http'],

  http: {
    baseURL: 'https://e5z186clzl.microcms.io/api/v1',
    headers: {
      'X-API-KEY': 'nFLZ2FIqZSDz5D4BzUs8heoT5R7kMBW4yhsF',
    },
  },

  // 静的なビルドの設定
  nitro: {
    preset: 'static',
  },

  // 他の設定（必要に応じて追加）
  app: {
    head: {
      title: 'My Nuxt 3 Project',
      meta: [
        { name: 'description', content: 'A static site built with Nuxt 3 and microCMS' },
      ],
    },
  },
});
