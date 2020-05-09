<template>
  <a class="story-item__link" :href="link">
    <img
      :src="photoUrl"
      :alt="`Фотография автора ${author}`"
      class="story-item__photo"
    />
    <h3 class="story-item__author">{{ author }}</h3>
    <p class="story-item__text">{{ text }}</p>
  </a>
</template>

<script>
export default {
  props: ['photoUrl', 'author', 'text', 'link'],
};
</script>

<style scoped>
.story-item__link {
  text-decoration: none;
  color: #000;
}

.story-item__photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0 0 20px;
}

.story-item__author {
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
  margin: 0 0 14px;
  padding: 0;
}

.story-item__text {
  font-size: 14px;
  line-height: 1.29;
  color: #666666;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .story-item__photo {
    height: 265px;
    /* TODO: подумать, мб height сделать как-то поумнее */
  }
}
</style>
