<template>
  <button :class="['arrow-button']">
    <img src="@/static/arrow.png" alt="" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.arrow-button {
  background: transparent;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.arrow-button_direction_right {
  transform: rotate(90deg);
}
</style>
