<template>
  <button :class="['slide-button']">
    <img
      src="@/static/arrow.png"
      alt=""
      :class="['img-arrow', 'img-arrow_direction_right']"
    />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.slide-button {
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: black;
}

.img-arrow {
  width: 16px;
  height: 8px;
  color: #000000;
}

.img-arrow:active {
  color: #000000;
}

.img-arrow_direction_right {
  transform: rotate(270deg);
}

.img-arrow_direction_left {
  transform: rotate(90deg);
}
</style>
