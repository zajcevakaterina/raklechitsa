<template>
  <main class="content">
    <cover />
    <intro class="root__section" />
    <stories class="root__section" />
    <!-- <a class="more-stories__link" href="stories">
      <stories-button class="more-stories__button root__section">Больше статей</stories-button>
    </a> -->

    <a class="more-stories-link root__section" href="stories"
      ><p class="more-stories-link__text">Больше статей</p></a
    >

    <section class="insta root__section">
      <tag-lead class="insta__cover"
        >рассказывайте ваши истории в&nbsp;инстаграм</tag-lead
      >
      <div class="insta__container">
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
            запрещенного контента попадают сюда. Следите за правильным
            написанием хештега, чтобы мы не пропустили вашу
            историю.</section-text
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
      </div>
    </section>
    <call-to-action />
    <statistics class="root__section" />
    <about />
  </main>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Cover from '@/components/blocks/Cover';
import Intro from '@/components/blocks/Intro';
import Stories from '@/components/blocks/Stories';
import InstaPhoto from '@/components/InstaPhoto';
import CallToAction from '@/components/blocks/CallToAction';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';
import TagLead from '@/components/TagLead';
import Button from '@/components/ui/Button';

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
    'tag-lead': TagLead,
    'stories-button': Button,
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
@import url(@/blocks/more-stories-link/more-stories-link.css);
@import url(@/blocks/insta/insta.css);
</style>
