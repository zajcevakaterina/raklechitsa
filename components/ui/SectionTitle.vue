<template>
  <h2 class="section__title">
    <slot></slot>
  </h2>
</template>

<script>
export default {};
</script>

<style scoped>
.section__title {
  max-width: 413px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  margin: 0;
}
@media screen and (max-width: 1280px) {
  .section__title {
    max-width: 367px;
    font-size: 28px;
    line-height: 1.14;
  }
}

@media screen and (max-width: 1024px) {
  .section__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 1.17;
  }
}

@media screen and (max-width: 768px) {
  .section__title {
    max-width: 380px;
    font-size: 24px;
    line-height: 1.17;
  }
}

@media screen and (max-width: 320px) {
  .section__title {
    max-width: 290px;
    font-size: 18px;
    line-height: 1.17;
    align-self: start;
  }
}
</style>
