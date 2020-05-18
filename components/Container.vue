<template>
  <div :class="['container', className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['className'],
};
</script>

<style scoped>
.container {
  width: calc(100% - 120px);
  max-width: 1320px;
  margin: 0 auto;
}
@media screen and (max-width: 1280px) {
  .container {
    width: calc(100% - 100px);
  }
}
@media screen and (max-width: 1024px) {
  .container {
    width: calc(100% - 80px);
  }
}
@media screen and (max-width: 320px) {
  .container {
    width: calc(100% - 30px);
  }
}
</style>
