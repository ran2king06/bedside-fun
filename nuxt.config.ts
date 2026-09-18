export default defineNuxtConfig({
  compatibilityDate: '2026-09-18',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      title: '枕邊小物 Bedside Finds｜兩個人的親密選物',
      meta: [
        { name: 'description', content: '枕邊小物 Bedside Finds，為情侶與夫妻準備的親密生活選物。從好奇開始，找到兩個人的節奏。' },
        { name: 'theme-color', content: '#fffdf6' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
