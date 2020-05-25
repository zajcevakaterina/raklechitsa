<template>
  <button class="arrow-button" @click="$emit('scrollToCoverClick')" />
</template>

<script>
export default {
  name: 'ArrowButton',
};
</script>

<style scoped>
.arrow-button {
  background: no-repeat url('/arrows/arrow.png');
  background-size: cover;
  width: 36px;
  height: 14px;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
}
</style>
