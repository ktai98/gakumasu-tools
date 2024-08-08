<template>
  <div class="calculator-container">
    <h1>残り３週計算機</h1>
    <div class="input-section">
      <h2>残り３週</h2>
      <form @submit.prevent>
        <div class="input-row">
          <div class="input-group vo-group">
            <label for="vo">Voステータス:</label>
            <input type="number" id="vo" v-model.number="status.vo" @input="calculate" min="0" max="1500" required>
          </div>
          <div class="input-group da-group">
            <label for="da">Daステータス:</label>
            <input type="number" id="da" v-model.number="status.da" @input="calculate" min="0" max="1500" required>
          </div>
          <div class="input-group vi-group">
            <label for="vi">Viステータス:</label>
            <input type="number" id="vi" v-model.number="status.vi" @input="calculate" min="0" max="1500" required>
          </div>
        </div>
        <div class="input-row">
          <div class="input-group vo-group">
            <label for="voBonus">Voレスボ (%):</label>
            <input type="number" id="voBonus" v-model.number="bonus.vo" @input="calculate" min="0.0" step="0.1" required>
          </div>
          <div class="input-group da-group">
            <label for="daBonus">Daレスボ (%):</label>
            <input type="number" id="daBonus" v-model.number="bonus.da" @input="calculate" min="0.0" step="0.1" required>
          </div>
          <div class="input-group vi-group">
            <label for="viBonus">Viレスボ (%):</label>
            <input type="number" id="viBonus" v-model.number="bonus.vi" @input="calculate" min="0.0" step="0.1" required>
          </div>
        </div>
        <div class="input-row">
          <div class="input-group vo-group">
            <p>Voレッスンタイプ:</p>
            <label><input type="radio" name="voLessonType" value="false" v-model="lessonType.vo" @change="calculate" /> 通常レッスン</label>
            <label><input type="radio" name="voLessonType" value="true" v-model="lessonType.vo" @change="calculate" /> SPレッスン</label>
          </div>
          <div class="input-group da-group">
            <p>Daレッスンタイプ:</p>
            <label><input type="radio" name="daLessonType" value="false" v-model="lessonType.da" @change="calculate" /> 通常レッスン</label>
            <label><input type="radio" name="daLessonType" value="true" v-model="lessonType.da" @change="calculate" /> SPレッスン</label>
          </div>
          <div class="input-group vi-group">
            <p>Viレッスンタイプ:</p>
            <label><input type="radio" name="viLessonType" value="false" v-model="lessonType.vi" @change="calculate" /> 通常レッスン</label>
            <label><input type="radio" name="viLessonType" value="true" v-model="lessonType.vi" @change="calculate" /> SPレッスン</label>
          </div>
        </div>
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
    <div class="results-section">
      <h2>追い込みレッスン後のステータス</h2>
      <div class="result-row vo-group">
        <p>Voレッスン→Vo追い込み:</p>
        <p>Vo: {{ results.voToVo.vo }}, Da: {{ results.voToVo.da }}, Vi: {{ results.voToVo.vi }}</p>
      </div>
      <div class="result-row da-group">
        <p>Voレッスン→Da追い込み:</p>
        <p>Vo: {{ results.voToDa.vo }}, Da: {{ results.voToDa.da }}, Vi: {{ results.voToDa.vi }}</p>
      </div>
      <div class="result-row vi-group">
        <p>Voレッスン→Vi追い込み:</p>
        <p>Vo: {{ results.voToVi.vo }}, Da: {{ results.voToVi.da }}, Vi: {{ results.voToVi.vi }}</p>
      </div>
      <div class="result-row vo-group">
        <p>Daレッスン→Vo追い込み:</p>
        <p>Vo: {{ results.daToVo.vo }}, Da: {{ results.daToVo.da }}, Vi: {{ results.daToVo.vi }}</p>
      </div>
      <div class="result-row da-group">
        <p>Daレッスン→Da追い込み:</p>
        <p>Vo: {{ results.daToDa.vo }}, Da: {{ results.daToDa.da }}, Vi: {{ results.daToDa.vi }}</p>
      </div>
      <div class="result-row vi-group">
        <p>Daレッスン→Vi追い込み:</p>
        <p>Vo: {{ results.daToVi.vo }}, Da: {{ results.daToVi.da }}, Vi: {{ results.daToVi.vi }}</p>
      </div>
      <div class="result-row vo-group">
        <p>Viレッスン→Vo追い込み:</p>
        <p>Vo: {{ results.viToVo.vo }}, Da: {{ results.viToVo.da }}, Vi: {{ results.viToVo.vi }}</p>
      </div>
      <div class="result-row da-group">
        <p>Viレッスン→Da追い込み:</p>
        <p>Vo: {{ results.viToDa.vo }}, Da: {{ results.viToDa.da }}, Vi: {{ results.viToDa.vi }}</p>
      </div>
      <div class="result-row vi-group">
        <p>Viレッスン→Vi追い込み:</p>
        <p>Vo: {{ results.viToVi.vo }}, Da: {{ results.viToVi.da }}, Vi: {{ results.viToVi.vi }}</p>
      </div>
    </div>
    <div class="results-section">
      <h2>ゲーム終了時のステータス合計値</h2>
      <div v-for="(result, index) in sortedResults" :key="index" class="result-row">
        <p>{{ result.label }}: {{ result.total }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

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
      voToVo: { vo: 0, da: 0, vi: 0 },
      voToDa: { vo: 0, da: 0, vi: 0 },
      voToVi: { vo: 0, da: 0, vi: 0 },
      daToVo: { vo: 0, da: 0, vi: 0 },
      daToDa: { vo: 0, da: 0, vi: 0 },
      daToVi: { vo: 0, da: 0, vi: 0 },
      viToVo: { vo: 0, da: 0, vi: 0 },
      viToDa: { vo: 0, da: 0, vi: 0 },
      viToVi: { vo: 0, da: 0, vi: 0 },
    });

    const calculate = () => {
      results.value.voLesson = calculate_lesson_growth('vo');
      results.value.daLesson = calculate_lesson_growth('da');
      results.value.viLesson = calculate_lesson_growth('vi');

      results.value.voToVo = calculate_final_growth(results.value.voLesson, 'vo');
      results.value.voToDa = calculate_final_growth(results.value.voLesson, 'da');
      results.value.voToVi = calculate_final_growth(results.value.voLesson, 'vi');

      results.value.daToVo = calculate_final_growth(results.value.daLesson, 'vo');
      results.value.daToDa = calculate_final_growth(results.value.daLesson, 'da');
      results.value.daToVi = calculate_final_growth(results.value.daLesson, 'vi');

      results.value.viToVo = calculate_final_growth(results.value.viLesson, 'vo');
      results.value.viToDa = calculate_final_growth(results.value.viLesson, 'da');
      results.value.viToVi = calculate_final_growth(results.value.viLesson, 'vi');
    };

    function calculate_lesson_growth(attribute: 'vo' | 'da' | 'vi') {
      const newStatus = { ...status.value };
      newStatus[attribute] = Math.floor(calculate_growth(
        status.value[attribute],
        bonus.value[attribute],
        lessonType.value[attribute] === 'true'
      ));
      return newStatus;
    }

    function calculate_growth(currentStatus: number, lessonBonus: number, isSP: boolean): number {
      const baseIncrease = isSP ? 220 : 110; // SPレッスンで220, 通常レッスンで110
      const bonusEffect = baseIncrease * (lessonBonus / 100);
      return currentStatus + baseIncrease + bonusEffect;
    }

    function calculate_final_growth(currentStatus: { vo: number, da: number, vi: number }, focus: 'vo' | 'da' | 'vi') {
      const finalStatus = { ...currentStatus };
      finalStatus[focus] = Math.floor(finalStatus[focus] + 310 + (310 * (bonus.value[focus] / 100)));
      if (focus !== 'vo') finalStatus.vo = Math.floor(finalStatus.vo + 145 + (145 * (bonus.value.vo / 100)));
      if (focus !== 'da') finalStatus.da = Math.floor(finalStatus.da + 145 + (145 * (bonus.value.da / 100)));
      if (focus !== 'vi') finalStatus.vi = Math.floor(finalStatus.vi + 145 + (145 * (bonus.value.vi / 100)));
      return finalStatus;
    }

    function calculate_total(status: { vo: number, da: number, vi: number }): number {
      const vo = Math.min(1500, status.vo + 30);
      const da = Math.min(1500, status.da + 30);
      const vi = Math.min(1500, status.vi + 30);
      return vo + da + vi;
    }

    const sortedResults = computed(() => {
      const resultArray = [
        { label: 'Voレッスン→Vo追い込み', total: calculate_total(results.value.voToVo) },
        { label: 'Voレッスン→Da追い込み', total: calculate_total(results.value.voToDa) },
        { label: 'Voレッスン→Vi追い込み', total: calculate_total(results.value.voToVi) },
        { label: 'Daレッスン→Vo追い込み', total: calculate_total(results.value.daToVo) },
        { label: 'Daレッスン→Da追い込み', total: calculate_total(results.value.daToDa) },
        { label: 'Daレッスン→Vi追い込み', total: calculate_total(results.value.daToVi) },
        { label: 'Viレッスン→Vo追い込み', total: calculate_total(results.value.viToVo) },
        { label: 'Viレッスン→Da追い込み', total: calculate_total(results.value.viToDa) },
        { label: 'Viレッスン→Vi追い込み', total: calculate_total(results.value.viToVi) },
      ];

      return resultArray.sort((a, b) => b.total - a.total);
    });

    // 初期計算
    calculate();

    return { status, bonus, lessonType, results, calculate, sortedResults };
  }
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.calculator-container {
  padding-top: 100px; /* ヘッダーの高さ分のパディングを追加 */
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:auto;
  min-height: 100vh; /* コンテナーの高さを100vhに設定 */
  box-sizing: border-box;
}

.input-section, .results-section {
  background-color: #ccffcc; /* 薄緑色 */
  padding: 10px; /* パディングを調整 */
  margin: 10px 0; /* マージンを調整 */
  border-radius: 8px;
  width: 100%;
  max-width: 600px; /* 最大幅を600pxに設定 */
  display: flex; /* Flexboxを使用 */
  flex-direction: column; /* 子要素を縦に並べる */
  align-items: center; /* 子要素を中央揃え */
  box-sizing: border-box;
}

.input-row, .result-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 0;
  box-sizing: border-box;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
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
  width: 100%;
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
