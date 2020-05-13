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
.more-stories-link {
  background: #fbfbfb;
  font-size: 16px;
  line-height: 1.25;
  color: #000;
  text-decoration: none;
  border: none;
  font-family: inherit;
  height: 82px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.more-stories-link:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1280px) {
  .more-stories-link {
    height: 78px;
  }
}

@media screen and (max-width: 1024px) {
  .more-stories-link {
    height: 50px;
    font-size: 13px;
    line-height: 1.54;
  }
}

/* TODO: может, эти стили вынести в папку blocks и импортировать css? */

.insta {
  margin: auto;
}

.insta__cover {
  margin-bottom: 100px;
}

.insta__container {
  display: grid;
  grid-template-columns: fit-content(340px) 1fr;
  justify-content: space-between;
  margin: 0 auto;
}

.insta__desc {
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.insta__title-link {
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
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
  margin: 0 0 100px 110px;
  column-gap: 30px;
  row-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .insta__text {
    margin-top: 30px;
  }

  .insta__cards {
    margin-bottom: 90px;
    column-gap: 27px;
    row-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .insta__text {
    margin-top: 20px;
  }

  .insta__cards {
    margin-bottom: 80px;
    margin-left: 60px;
    column-gap: 20px;
    row-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .insta__container {
    grid-template-columns: 1fr;
    grid-template-rows: fit-content(140px) 1fr;
  }

  .insta__desc {
    padding-top: 0px;
    align-items: center;
  }

  .insta__text {
    margin-top: 26px;
  }

  .insta__cards {
    grid-template-columns: repeat(4, 1fr);
    margin: 60px 0 80px;
  }

  .tag-lead {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 475px) {
  .insta__desc {
    padding-top: 0px;
    align-items: flex-start;
  }

  .insta__text {
    margin-top: 16px;
  }

  .insta__cards {
    grid-template-columns: repeat(2, 1fr);
    margin: 40px 0 50px;
    column-gap: 10px;
    row-gap: 10px;
  }

  .insta__tag-lead {
    margin-bottom: 50px;
  }
}
</style>
