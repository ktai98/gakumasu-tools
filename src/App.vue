<template>
  <div id="app">
    <SiteHeader />
    <main>
      <router-view></router-view>
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from './components/SiteHeader.vue'; // 更新されたパス
import SiteFooter from './components/SiteFooter.vue'; // 更新されたパス

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader, // 更新された名前
    SiteFooter, // 更新された名前
  },
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  background-color: #fff; /* 背景色を白に設定 */
  color: #333; /* テキストカラーを設定 */
  min-height: 100vh; /* ビューポートの最小高さを100%に設定 */
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* ボックスサイズを境界線を含めたサイズに設定 */
  min-width: 100vw; /* ビューポートの幅を100%に設定 */
}

main {
  padding-top: 70px; /* ヘッダーの高さ + マージン */
  padding-bottom: 70px; /* フッターの高さ + マージン */
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px; /* 中央のコンテンツの最大幅 */
  width: 100%; /* 中央のコンテンツの幅を100%に設定 */
}
</style>


