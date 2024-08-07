<template>
  <div class="calculator-container">
    <h1>残り３週計算機</h1>
    <form @submit.prevent="calculate">
      <div class="input-row">
        <div class="input-group">
          <label for="vo">Voステータス:</label>
          <input type="number" id="vo" v-model.number="status.vo" min="0" max="1500" required>
        </div>
        <div class="input-group">
          <label for="da">Daステータス:</label>
          <input type="number" id="da" v-model.number="status.da" min="0" max="1500" required>
        </div>
        <div class="input-group">
          <label for="vi">Viステータス:</label>
          <input type="number" id="vi" v-model.number="status.vi" min="0" max="1500" required>
        </div>
      </div>
      <div class="input-row">
        <div class="input-group">
          <label for="voBonus">Voレッスンボーナス (%):</label>
          <input type="number" id="voBonus" v-model.number="bonus.vo" min="0.0" step="0.1" required>
        </div>
        <div class="input-group">
          <label for="daBonus">Daレッスンボーナス (%):</label>
          <input type="number" id="daBonus" v-model.number="bonus.da" min="0.0" step="0.1" required>
        </div>
        <div class="input-group">
          <label for="viBonus">Viレッスンボーナス (%):</label>
          <input type="number" id="viBonus" v-model.number="bonus.vi" min="0.0" step="0.1" required>
        </div>
      </div>
      <div class="input-row">
        <!-- Voのレッスンタイプ選択 -->
        <div class="input-group">
          <p>Voレッスンタイプ:</p>
          <label><input type="radio" name="voLessonType" value="false" v-model="lessonType.vo" /> 通常レッスン</label>
          <label><input type="radio" name="voLessonType" value="true" v-model="lessonType.vo" /> SPレッスン</label>
        </div>
        <!-- Daのレッスンタイプ選択 -->
        <div class="input-group">
          <p>Daレッスンタイプ:</p>
          <label><input type="radio" name="daLessonType" value="false" v-model="lessonType.da" /> 通常レッスン</label>
          <label><input type="radio" name="daLessonType" value="true" v-model="lessonType.da" /> SPレッスン</label>
        </div>
        <!-- Viのレッスンタイプ選択 -->
        <div class="input-group">
          <p>Viレッスンタイプ:</p>
          <label><input type="radio" name="viLessonType" value="false" v-model="lessonType.vi" /> 通常レッスン</label>
          <label><input type="radio" name="viLessonType" value="true" v-model="lessonType.vi" /> SPレッスン</label>
        </div>
      </div>
      <button type="submit">計算する</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Left3WeeksCalculator',
  setup() {
    const status = ref({ vo: 0, da: 0, vi: 0 });
    const bonus = ref({ vo: 0.0, da: 0.0, vi: 0.0 });
    const lessonType = ref({ vo: 'false', da: 'false', vi: 'false'});


    const calculate = () => {
      console.log('計算結果', status.value, bonus.value, lessonType.value);
    };

    return { status, bonus, lessonType, calculate };
  }
});
</script>

<style scoped>
.calculator-container {
  padding: 1em;
  margin-top: 20px;
}

.input-row {
  display: flex;
  justify-content: space-around; /* 入力グループ間の間隔を均等に */
  margin-bottom: 1em; /* 各行の下マージン */
}

.input-group {
  display: flex;
  flex-direction: column; /* ラベルと入力フィールドを縦に並べる */
  align-items: flex-start; /* 左寄せ */
}

label {
  margin-bottom: 0.5em; /* ラベルと入力フィールドの間のマージン */
}
</style>
