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
  props: {
    theme: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style scoped>
.button {
  font-size: 16px;
  line-height: 1.18;
  border: none;
  background-color: #714dbd;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
}

.button:disabled {
  background: #666;
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

@media screen and (max-width: 1280px) {
  .button {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .button {
    font-size: 15px;
  }
}

@media screen and (max-width: 425px) {
  .button {
    font-size: 13px;
    line-height: 1.23;
  }
}
</style>
