<template>
  <a class="insta-photo__link" :href="`${instaLink}`" target="blank">
    <div
      :style="`background-image: url(${instaImage})`"
      class="insta-photo__image"
    ></div>
  </a>
</template>

<script>
export default {
  props: ['author', 'instaLink', 'instaImage'],
};
</script>

<style scoped>
.insta-photo__image {
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  display: block;
}
</style>
