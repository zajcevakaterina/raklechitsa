<template>
  <button class="slider-button" @click="$emit('btnClickLeftIntro')">
    <img src="@/static/arrows/leftNactivearrow.png" alt="arrow" class="arrow" />
  </button>
</template>

<script>
export default {};
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
