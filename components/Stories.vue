<template>
  <section class="stories">
    <section-title class="stories__title"
      >Истории неизлечимых привычек</section-title
    >
    <ul class="stories__list">
      <li
        class="stories__item"
        v-for="story in stories"
        :key="story.id"
        @storyClick="goToStory(story.id)"
      >
        <story-item
          :author="story.author"
          :text="story.text"
          :photoUrl="story.photoUrl"
          :link="`/stories/${story.id}`"
        />
      </li>
    </ul>
    <stories-button class="stories__button">Больше статей</stories-button>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import StoryItem from '@/components/StoryItem';
import Button from '@/components/ui/Button';

export default {
  components: {
    'section-title': SectionTitle,
    'story-item': StoryItem,
    'stories-button': Button,
  },

  methods: {
    goToStory(id) {
      this.$router.push(`/stories/${id}`);
    },
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
.stories {
  margin: 0 auto;
}

.stories__title {
  margin: 100px 0 70px;
}

.stories__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 70px;
  padding: 0;
  list-style: none;
  justify-content: center;
  margin: 0 0 70px;
}

.stories__button {
  background: #fbfbfb;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  text-decoration: none;
  border: none;
  padding: 0;
  font-family: inherit;
  width: 100%;
  height: 82px;
  margin-bottom: 100px;
}

.stories__button:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1280px) {
  .stories__list {
    row-gap: 60px;
    margin-bottom: 60px;
  }

  .stories__button {
    height: 86px;
  }

  .stories__title {
    margin: 90px 0 60px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__list {
    column-gap: 30px;
    row-gap: 46px;
    margin-bottom: 46px;
  }

  .stories__title {
    margin: 80px 0 46px;
  }

  .stories__button {
    height: 50px;
    font-size: 13px;
    line-height: 1.54;
  }
}

@media screen and (max-width: 768px) {
  .stories__list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-bottom: 40px;
  }

  .stories__title {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 475px) {
  .stories__list {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .stories__title {
    margin: 50px 0 40px;
  }
}
</style>
