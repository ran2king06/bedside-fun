<script setup lang="ts">
type Collection = {
  id: string
  number: string
  english: string
  title: string
  short: string
  description: string
  symbol: string
}

const collections: Collection[] = [
  {
    id: 'first', number: '01', english: 'BEGIN', title: '第一次一起選',
    short: '輕鬆開始・自在探索', description: '好奇就先聊聊，挑選讓兩個人都自在的親密小物。', symbol: '♡',
  },
  {
    id: 'together', number: '02', english: 'TOGETHER', title: '雙人探索所',
    short: '添一點新的默契', description: '給熟悉的日常，添一點新的默契和共同體驗。', symbol: '✦',
  },
  {
    id: 'senses', number: '03', english: 'SENSES', title: '感官小物店',
    short: '留一些時間給彼此', description: '從觸感到氛圍，留一段專心陪伴彼此的時間。', symbol: '☼',
  },
]
</script>

<template>
  <SiteHeader />
  <main id="top">
    <section class="intro">
      <div>
        <span class="eyebrow">WELCOME TO BEDSIDE FINDS ✦</span>
        <h1>兩個人的小日子，<br><span class="highlight">多一點親密的小事。</span></h1>
        <p>枕邊小物，是為情侶與夫妻準備的親密生活選物。從好奇開始，慢慢找到兩個人的節奏。</p>
      </div>
      <div class="stamp">一起探索<small>從心動的小物開始</small></div>
    </section>

    <section class="town" aria-label="枕邊小物的插畫小店">
      <img
        src="/bedside-town.webp"
        alt="一對成年情侶牽手走近溫暖的小店，店員在店內迎接他們"
        width="1536"
        height="1024"
      >
      <div class="speech">歡迎光臨！今天想一起看看什麼？</div>
      <div class="choice-row">
        <a v-for="item in collections" :key="item.id" class="choice" :href="`#${item.id}`">
          <span class="num">{{ item.number }}</span>
          <span><strong>{{ item.title }}</strong><small>{{ item.short }}</small></span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
    <div class="after-town">
      <span>一起逛逛，沒有標準路線。</span>
      <span>親密生活選物 · 給每一對有自己步調的伴侶 ✦</span>
    </div>

    <section id="collections" class="section" aria-labelledby="collection-title">
      <div class="section-head">
        <div>
          <span class="eyebrow">THREE LITTLE WAYS TO BEGIN</span>
          <h2 id="collection-title">今天，想從哪裡開始？</h2>
          <p>依照你們現在的心情，挑一個方向看看。</p>
        </div>
        <span class="tag">小店導覽中</span>
      </div>
      <div class="cards">
        <article v-for="item in collections" :id="item.id" :key="item.id" class="card">
          <span class="number">{{ item.number }} / {{ item.english }}</span>
          <span class="symbol" aria-hidden="true">{{ item.symbol }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section id="about" class="note">
      <div class="big">慢慢來，<br>剛剛好。</div>
      <div>
        <span class="eyebrow">A NOTE FROM BEDSIDE</span>
        <h2>親密，不需要標準答案。</h2>
        <p>有時是聊得更深，有時是一起試試新事物。枕邊小物想用不尷尬、可以慢慢逛的方式，陪你們探索兩個人的親密生活。</p>
      </div>
    </section>
    <SiteFooter />
  </main>
</template>
