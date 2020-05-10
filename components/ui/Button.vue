<template>
  <button :class="['button', `button_size_${size}`]">
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  props: ['size'],
};
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  padding: 16px;
  box-sizing: border-box;
  background: #613a93;
  border: none;
  color: #ffffff;
  height: 52px;
}
.button:hover {
  opacity: 0.9;
}

.button_size_maxi {
  width: 280px;
}

.button_size_mini {
  width: 226px;
}
</style>
