<template>
  <div class="calculator-container">
    <h1>残り３週計算機</h1>
    <!-- ここに計算機のロジックを追加 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Left3WeeksCalculator',
});
</script>

<style scoped>
.calculator-container {
  padding-top: 70px; /* ヘッダーの高さに合わせたマージンを設定 */
  padding-bottom: 30px; /* 下部のマージンも適宜調整 */
}

h1 {
  margin-top: 0;
  padding: 0.5em 0;
  font-size: 2em;
}
</style>
