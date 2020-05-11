<template>
  <section class="stories">
    <section-title class="stories__title"
      >Истории неизлечимых привычек</section-title
    >
    <ul class="stories__list">
      <li class="stories__item" v-for="story in stories" :key="story.id">
        <story-item
          :author="story.author"
          :text="story.text"
          :photoUrl="story.photoUrl"
          :link="`/stories/${story.id}`"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import StoryItem from '@/components/StoryItem';

export default {
  components: {
    'section-title': SectionTitle,
    'story-item': StoryItem,
  },
  data() {
    return {
      stories: [
        {
          id: 1,
          photoUrl: '/images/stories/story-photo1.jpg',
          // TODO: уменьшить размеры фотографий
          author: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 2,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: 3,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: 4,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: 5,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: 6,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: 7,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
        {
          id: 8,
          photoUrl:
            'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
          author: 'Александр Тарханов',
          text: 'Я не могу победить свою пунктуальность в отличии от рака.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories__title {
  margin: 100px 0 70px;
}
.stories__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  column-gap: 40px;
  row-gap: 70px;
  padding: 0;
  list-style: none;
  justify-content: center;
}

@media screen and (max-width: 1280px) {
  .stories__list {
    grid-template-columns: repeat(auto-fit, 265px);
    row-gap: 60px;
  }
}
</style>
