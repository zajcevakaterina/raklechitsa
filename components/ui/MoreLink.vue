<template>
  <nuxt-link :to="whereToGo" class="more-link">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    whereToGo: String,
  },
};
</script>

<style scoped>
.more-link {
  background: #fbfbfb;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  text-decoration: none;
  border: none;
  font-family: inherit;
  height: 82px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-link:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s linear;
}

@media screen and (max-width: 1280px) {
  .more-link {
    height: 78px;
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .more-link {
    height: 50px;
    font-size: 13px;
    line-height: 1.54;
    margin-bottom: 80px;
  }
}

@media (max-width: 425px) {
  .more-link {
    margin-bottom: 45px;
  }
}
</style>
