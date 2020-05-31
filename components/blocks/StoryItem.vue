<template>
  <a class="story-item" :href="link">
    <div
      :style="`background-image: url('${baseurl}${ImageUrl}')`"
      class="story-item__photo"
    />

    <h3 class="story-item__author">{{ author }}</h3>
    <p class="story-item__quote">{{ title }}</p>
  </a>
</template>

<script>
export default {
  props: ['ImageUrl', 'author', 'title', 'link'],
  data() {
    return {
      baseurl: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
.story-item {
  text-decoration: none;
  color: #000;
}

.story-item__photo {
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-size: cover;
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

.story-item__quote {
  font-size: 14px;
  line-height: 1.29;
  color: #666;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 1024px) {
  .story-item__photo {
    margin-bottom: 16px;
  }

  .story-item__author {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 16px;
  }

  .story-item__quote {
    font-size: 13px;
    line-height: 1.23;
  }
}
</style>
