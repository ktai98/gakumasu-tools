<template>
  <footer>
    <p>&copy; 2024 学マス補助ツール置き場</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteFooter',
});
</script>

<style scoped>
footer {
  background-color: #333333; /* 背景色を濃いグレーに変更 */
  color: #fff; /* 文字色は白のまま */
  padding: 1em;
  border-top: 1px solid #dee2e6;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>

