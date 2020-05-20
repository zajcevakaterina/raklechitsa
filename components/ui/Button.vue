<template>
  <button
    @click="$emit('btnClick')"
    :class="['button', `button_theme_${theme}`]"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.button {
  font-size: 16px;
  line-height: 19px;
  border: none;
  background-color: #714dbd;
  padding: 20px 103px;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
}

.button:hover {
  opacity: 0.9;
  transition: opacity 0.3s linear;
}

.button_theme_share {
  background-color: transparent;
  color: #121212;
  padding: 0;
  outline: 0;
}

.button_theme_share:hover {
  opacity: 0.8;
}
</style>
