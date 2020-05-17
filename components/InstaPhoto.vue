<template>
  <a class="photo-link" :href="`${link}`" target="blank">
    <div
      :style="`background-image: url(${urlPhotoImage})`"
      class="photo-link__image"
    ></div>
  </a>
</template>

<script>
export default {
  props: ['author', 'link', 'urlPhotoImage'],
};
</script>

<style scoped>
.photo-link__image {
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  display: block;
}
</style>
