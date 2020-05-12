<template>
  <div class="slider-buttons">
    <button class="slider-button" @click="$emit('btnClickLeftIntro')">
      <img
        src="@/static/arrows/leftNactivearrow.png"
        alt="arrow"
        class="arrow"
      />
    </button>
    <button class="slider-button" @click="$emit('btnClickRightIntro')">
      <img
        src="@/static/arrows/rightActivearrow.png"
        alt="arrow"
        class="arrow"
      />
    </button>
  </div>
</template>

<script>
export default {
  //TODO сделать обработчик активности кнопки
  methods: {
    buttonHandler() {},
  },
};
</script>

<style scoped>
.slider-button {
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  padding: 0;
}
</style>
