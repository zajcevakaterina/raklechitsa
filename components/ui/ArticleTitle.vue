<template>
  <h1 class="article-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped>
.article-title {
  font-weight: 500;
  font-size: 34px;
  line-height: 1.29;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1024px) {
  .article-title {
    font-size: 30px;
    line-height: 1.27;
  }
}

@media screen and (max-width: 450px) {
  .article-title {
    font-size: 18px;
    line-height: 1.17;
  }
}
</style>
