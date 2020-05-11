<template>
  <a class="insta-photo__link" :href="`${instaLink}`" target="blank">
    <img
      :src="`${instaImage}`"
      :alt="`Автор фотографии ${author}`"
      class="insta-photo__image"
    />
  </a>
</template>

<script>
export default {
  props: ['author', 'instaLink', 'instaImage'],
};
</script>

<style scoped>
.insta-photo__image {
  width: 195px;
  height: 195px;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
