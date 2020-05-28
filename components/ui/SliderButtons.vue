<template>
  <button class="slider-button " :class="[side]" @click="$emit('method')">
    <!-- <img src="@/static/arrows/leftNactivearrow.png" alt="arrow" class="arrow" /> -->
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
  background-image: url('/arrows/arrow-active.svg');
  background-position: center;
  background-repeat: no-repeat;
}

.slider-button_left {
  transform: rotate(180deg);
  background-image: url('/arrows/arrow-active.svg');
  background-position: center;
  background-repeat: no-repeat;
}
.slider-button_left + .swiper-button-disabled {
  background-image: url('/arrows/arrow-disable.svg');
  transform: rotate(180deg);
}
.swiper-button-disabled {
  background-image: url('/arrows/arrow-disable.svg');
  transform: rotate(0deg);
}
</style>
