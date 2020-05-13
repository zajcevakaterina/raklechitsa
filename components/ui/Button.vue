<template>
  <button @click="$emit('btnClick')" class="button">
    <slot>Далее</slot>
  </button>
</template>

<script>
export default {};
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
</style>
