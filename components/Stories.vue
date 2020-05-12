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
.stories {
  margin: 0 auto;
}

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
  /* justify-content: center; */
  margin: 0 0 46px;
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
    grid-template-columns: repeat(auto-fit, 265px);
    row-gap: 60px;
  }

  .stories__button {
    height: 86px;
  }
}

@media screen and (max-width: 1024px) {
  .stories__list {
    grid-template-columns: repeat(auto-fit, 208px);
    column-gap: 30px;
    row-gap: 46px;
  }

  .stories__button {
    height: 50px;
    font-size: 13px;
    line-height: 1.54;
  }
}

@media screen and (max-width: 768px) {
  .stories__list {
    grid-template-columns: repeat(auto-fit, 216px);
    column-gap: 20px;
    row-gap: 40px;
  }
}

@media screen and (max-width: 320px) {
  .stories__list {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
}
</style>
