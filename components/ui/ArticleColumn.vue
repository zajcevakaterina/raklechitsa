<template>
  <p class="article-column">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.article-column {
  font-size: 22px;
  line-height: 1.36;
  max-width: 780px;
  margin: 0 auto;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .article-column {
    font-size: 20px;
    line-height: 1.4;
  }
}

@media screen and (max-width: 1024px) {
  .article-column {
    font-size: 18px;
    line-height: 1.5;
  }
}

@media screen and (max-width: 768px) {
  .article-column {
    font-size: 18px;
    line-height: 1.5;
  }
}

@media screen and (max-width: 440px) {
  .article-column {
    font-size: 13px;
    line-height: 1.23;
  }
}
</style>
