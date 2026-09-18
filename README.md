# 枕邊小物 Bedside Finds

Nuxt 4 / Vue 3 的品牌首頁雛形，包含響應式版型、人物插畫與三個選物分類。這是概念展示，尚未串接商品、購物車、付款或後台。

## 開始開發

需要 Node.js 20.19 以上（建議 Node 22 或 24）。

```bash
npm install
npm run dev
```

開啟終端顯示的本機網址。主要頁面在 `app/pages/index.vue`，樣式在 `app/assets/css/main.css`，插畫在 `public/bedside-town.png`。

## 產生靜態網站

```bash
npm run generate
```

產物位於 `.output/public`，可部署到 Vercel 等支援靜態網站的平台。本專案也提供 `npm run generate:site`，會將相同產物複製到 `dist`，供目前的枕邊小物預覽網站使用。

目前頁面沒有真正可購買的商品。接入代發商前，請先確認貨源、庫存同步與商品資料使用授權，再加上購物與付款流程。
