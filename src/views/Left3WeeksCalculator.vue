<template>
  <div class="calculator-container">
    <h1>残り３週計算機</h1>
    <div class="input-section">
      <h2>残り３週</h2>
      <form @submit.prevent="calculate">
        <div class="input-row">
          <div class="input-group vo-group">
            <label for="vo">Voステータス:</label>
            <input type="number" id="vo" v-model.number="status.vo" min="0" max="1500" required>
          </div>
          <div class="input-group da-group">
            <label for="da">Daステータス:</label>
            <input type="number" id="da" v-model.number="status.da" min="0" max="1500" required>
          </div>
          <div class="input-group vi-group">
            <label for="vi">Viステータス:</label>
            <input type="number" id="vi" v-model.number="status.vi" min="0" max="1500" required>
          </div>
        </div>
        <div class="input-row">
          <div class="input-group vo-group">
            <label for="voBonus">Voレスボ (%):</label>
            <input type="number" id="voBonus" v-model.number="bonus.vo" min="0.0" step="0.1" required>
          </div>
          <div class="input-group da-group">
            <label for="daBonus">Daレスボ (%):</label>
            <input type="number" id="daBonus" v-model.number="bonus.da" min="0.0" step="0.1" required>
          </div>
          <div class="input-group vi-group">
            <label for="viBonus">Viレスボ (%):</label>
            <input type="number" id="viBonus" v-model.number="bonus.vi" min="0.0" step="0.1" required>
          </div>
        </div>
        <div class="input-row">
          <div class="input-group vo-group">
            <p>Voレッスンタイプ:</p>
            <label><input type="radio" name="voLessonType" value="false" v-model="lessonType.vo" /> 通常レッスン</label>
            <label><input type="radio" name="voLessonType" value="true" v-model="lessonType.vo" /> SPレッスン</label>
          </div>
          <div class="input-group da-group">
            <p>Daレッスンタイプ:</p>
            <label><input type="radio" name="daLessonType" value="false" v-model="lessonType.da" /> 通常レッスン</label>
            <label><input type="radio" name="daLessonType" value="true" v-model="lessonType.da" /> SPレッスン</label>
          </div>
          <div class="input-group vi-group">
            <p>Viレッスンタイプ:</p>
            <label><input type="radio" name="viLessonType" value="false" v-model="lessonType.vi" /> 通常レッスン</label>
            <label><input type="radio" name="viLessonType" value="true" v-model="lessonType.vi" /> SPレッスン</label>
          </div>
        </div>
        <button type="submit">計算する</button>
      </form>
    </div>
    <div class="results-section">
      <h2>成長後のステータス</h2>
      <div class="result-row vo-group">
        <p>Voレッスン選択時:</p>
        <p>Vo: {{ results.voLesson.vo }}, Da: {{ results.voLesson.da }}, Vi: {{ results.voLesson.vi }}</p>
      </div>
      <div class="result-row da-group">
        <p>Daレッスン選択時:</p>
        <p>Vo: {{ results.daLesson.vo }}, Da: {{ results.daLesson.da }}, Vi: {{ results.daLesson.vi }}</p>
      </div>
      <div class="result-row vi-group">
        <p>Viレッスン選択時:</p>
        <p>Vo: {{ results.viLesson.vo }}, Da: {{ results.viLesson.da }}, Vi: {{ results.viLesson.vi }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Left3WeeksCalculator',
  setup() {
    const status = ref({ vo: 0, da: 0, vi: 0 });
    const bonus = ref({ vo: 0.0, da: 0.0, vi: 0.0 });
    const lessonType = ref({ vo: 'false', da: 'false', vi: 'false' });
    const results = ref({
      voLesson: { vo: 0, da: 0, vi: 0 },
      daLesson: { vo: 0, da: 0, vi: 0 },
      viLesson: { vo: 0, da: 0, vi: 0 },
    });

    const calculate = () => {
      results.value.voLesson = calculate_lesson_growth('vo');
      results.value.daLesson = calculate_lesson_growth('da');
      results.value.viLesson = calculate_lesson_growth('vi');
      console.log('成長後のステータス:', results.value);
    };

    function calculate_lesson_growth(attribute: 'vo' | 'da' | 'vi') {
      const newStatus = { ...status.value };
      newStatus[attribute] = calculate_growth(
        status.value[attribute],
        bonus.value[attribute],
        lessonType.value[attribute] === 'true'
      );
      return newStatus;
    }

    function calculate_growth(currentStatus: number, lessonBonus: number, isSP: boolean): number {
      const baseIncrease = isSP ? 220 : 110; // SPレッスンで220, 通常レッスンで110
      const bonusEffect = baseIncrease * (lessonBonus / 100);
      return currentStatus + baseIncrease + bonusEffect;
    }

    return { status, bonus, lessonType, results, calculate };
  }
});
</script>

<style scoped>
.calculator-container {
  padding: 1em;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* コンテナーの幅を100%に設定 */
}

.input-section, .results-section {
  background-color: #ccffcc; /* 薄緑色 */
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  width: 100%; /* セクションの幅を100%に設定 */
  max-width: 600px; /* 最大幅を600pxに設定 */
  display: flex; /* Flexboxを使用 */
  flex-direction: column; /* 子要素を縦に並べる */
  align-items: center; /* 子要素を中央揃え */
}

.input-row, .result-row {
  display: flex;
  justify-content: space-around;
  width: 100%; /* 行の幅を100%に設定 */
  margin-bottom: 1em;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; /* グループの幅を100%に設定 */
  padding: 10px; /* グループ内のパディングを追加 */
}

.result-row p {
  margin: 0;
  padding: 0.5em;
}

.vo-group {
  background-color: #ffccff; /* マゼンタ */
}

.da-group {
  background-color: #ccffff; /* シアン */
}

.vi-group {
  background-color: #ffffcc; /* イエロー */
}

input[type="number"] {
  width: 100%; /* 入力欄の幅を100%に設定 */
  max-width: 200px; /* 入力欄の最大幅を200pxに制限 */
}

label {
  margin-bottom: 0.5em;
}

h2 {
  text-align: center;
  color: #333;
  width: 100%; /* h2タグの幅を100%に設定 */
}
</style>
