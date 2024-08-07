<template>
  <div class="home">
    <h1>ツール一覧</h1> <!-- タイトルを変更 -->
    <router-link to="/left-3-weeks-calculator">残り３週計算機へ</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped>
.home {
  padding-top: 20px; /* 必要に応じて調整 */
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 2em;
  text-align: left; /* 上部に位置させる */
}
</style>
