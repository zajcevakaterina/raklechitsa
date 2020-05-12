<template>
  <p class="section__text">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.section__text {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin: 32px 0 0;
  max-width: 340px;
  color: #666666;
}
@media screen and (max-width: 1280px) {
  .section__text {
    max-width: 305px;
    font-size: 16px;
    line-height: 1.2;
    margin: 30px 0 0;
  }
}

@media screen and (max-width: 1024px) {
  .section__text {
    max-width: 260px;
    font-size: 13px;
    line-height: 1.23;
    margin: 20px 0 0;
  }
}

@media screen and (max-width: 768px) {
  .section__text {
    max-width: 380px;
    font-size: 13px;
    line-height: 1.23;
  }
}

@media screen and (max-width: 320px) {
  .section__text {
    max-width: 290px;
    font-size: 16px;
    line-height: 1.23;
  }
}
</style>
