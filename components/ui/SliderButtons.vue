<template>
  <button
    class="slider-button"
    :class="[side]"
    @click="$emit('btnClickLeftIntro')"
  >
    <img src="@/static/arrows/leftNactivearrow.png" alt="arrow" class="arrow" />
  </button>
</template>

<script>
export default {
  props: ['side'],
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

.slider-button_right .arrow {
  transform: rotate(180deg);
}
</style>
