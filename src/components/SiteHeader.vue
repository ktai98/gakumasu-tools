<template>
  <header>
    <h1>学マス補助ツール置き場</h1>
    <nav>
      <router-link to="/">ホーム</router-link>
      <router-link to="/left-3-weeks-calculator">残り３週計算機</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteHeader',
});
</script>

<style scoped>
header {
  background-color: #333333; /* 背景色を濃いグレーに変更 */
  color: #fff; /* 文字色は白のまま */
  padding: 1em;
  border-bottom: 1px solid #dee2e6;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  left: 0;
}
</style>
