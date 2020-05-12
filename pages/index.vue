<template>
  <main class="content">
    <cover />
    <intro class="root__section" />
    <stories class="root__section" />

    <section class="insta root__section">
      <div class="insta__desc">
        <a
          class="insta__title-link"
          href="https://www.instagram.com/raklechitsa/"
          target="blank"
        >
          <section-title class="insta__title">Инстаграм</section-title>
        </a>
        <section-text class="insta__text"
          >Два раза в неделю мы просматриваем все посты по хештегу
          #этонелечится. Все истории, где нет нецензурных выражений и
          запрещенного контента попадают сюда. Следите за правильным написанием
          хештега, чтобы мы не пропустили вашу историю.</section-text
        >
      </div>

      <ul class="insta__cards">
        <li class="insta__card" v-for="photo in photos" :key="photo.id">
          <insta-photo
            :author="photo.author"
            :instaLink="photo.instaLink"
            :instaImage="photo.instaImage"
          />
        </li>
      </ul>
    </section>
    <call-to-action />
    <statistics class="root__section" />
    <about />
  </main>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Cover from '@/components/Cover';
import Intro from '@/components/Intro';
import Stories from '@/components/Stories';
import InstaPhoto from '@/components/InstaPhoto';
import CallToAction from '@/components/CallToAction';
import Statistics from '@/components/Statistics';
import About from '@/components/About';

// TODO: Above переименовать на About

export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    cover: Cover,
    intro: Intro,
    stories: Stories,
    'insta-photo': InstaPhoto,
    'call-to-action': CallToAction,
    statistics: Statistics,
    about: About,
  },

  data() {
    return {
      photos: [
        {
          id: 1,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 2,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 3,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 4,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 5,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 6,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 7,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
        {
          id: 8,
          instaLink: 'https://www.instagram.com/p/B9ld-ULjMiz/',
          instaImage:
            'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/89358381_533144827582214_421034663561425989_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=yLJ0MQHnqZwAX8U9vny&oh=5bcad22d416cdb82bb72cdf14c603833&oe=5EE3FCCD',
          author: 'gladkova989',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* TODO: может, эти стили вынести в папку blocks и импортировать css? */
.insta {
  display: grid;
  grid-template-columns: fit-content(340px) 1fr;
  justify-content: space-between;
  margin: 0 auto;
}

.insta__desc {
  padding-top: 12px;
}

.insta__title-link {
  color: #000;
  text-decoration: none;
  display: inline;
  border-bottom: 2px solid #000;
}

.insta__title {
  display: inline;
}

.insta__title-link:hover {
  opacity: 0.8;
}

.insta__text {
  margin-top: 32px;
}

.insta__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 0 0 100px 60px;
  column-gap: 20px;
  row-gap: 20px;
}

@media screen and (max-width: 1024px) {
  .insta__text {
    margin-top: 30px;
  }
}

@media screen and (max-width: 1024px) {
  .insta__text {
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .insta {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .insta__desc {
    padding-top: 0px;
  }

  .insta__text {
    margin-top: 26px;
  }

  .insta__cards {
    display: grid;
    grid-template-columns: repeat(4, 157px);
    margin: 0;
  }
}

@media screen and (max-width: 320px) {
  .insta__text {
    margin-top: 16px;
  }
}
</style>
