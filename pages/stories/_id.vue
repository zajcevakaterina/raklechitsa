<template>
  <container class="container" v-if="story">
    <article class="individual-story">
      <div class="individual-story__lead">
        <story-title class="individual-story__title">
          {{ story.author }}:
          <span class="individual-story__quote"
            >&laquo;{{ story.title }}&raquo;</span
          >
        </story-title>

        <div class="individual-story__image-wrapper">
          <div
            class="individual-story__image"
            :style="`background-image: url('${baseurl}${isLargeImageToSet}')`"
          ></div>
        </div>

        <div class="individual-story__info">
          <share-button
            class="individual-story__link"
            :theme="'share'"
            @btnClick="openSharePopup"
            >Поделитесь &#8599;</share-button
          >
          <p class="individual-story__date">{{ storyDate }}</p>
        </div>
      </div>

      <story-column
        class="individual-story__text"
        v-html="story.text"
      ></story-column>

      <div class="individual-story__conclusion">
        <share-button
          class="individual-story__link individual-story__link_place_bottom"
          :theme="'share'"
          @btnClick="openSharePopup"
        >
          Поделитесь этой статьей в своих социальных сетях &#8599;
        </share-button>
      </div>
    </article>

    <stories :stories="itemsToLoop" />
    <more-link :whereToGo="'/stories'">Больше статей</more-link>
  </container>

  <error v-else />
</template>

<script>
import Container from '@/components/ui/Container';
import ArticleTitle from '@/components/ui/ArticleTitle';
import ArticleColumn from '@/components/ui/ArticleColumn';
import Button from '@/components/ui/Button';
import Stories from '@/components/blocks/Stories';
import MoreLink from '@/components/ui/MoreLink';
import Error404 from '@/components/blocks/Error404';

export default {
  components: {
    container: Container,
    'story-title': ArticleTitle,
    'story-column': ArticleColumn,
    'share-button': Button,
    stories: Stories,
    'more-link': MoreLink,
    error: Error404,
  },

  data() {
    return {
      baseurl: process.env.BASE_URL,
    };
  },

  head() {
    return {
      title: `${this.story.author} - история о побежденном раке, но не своей привычке`,
    };
  },

  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },

    storyId() {
      return this.$route.params.id;
    },

    story() {
      return this.$store.getters['stories/getCurrentStory'](this.storyId);
    },

    isLargeImageToSet() {
      const imageFormats = this.story.ImageUrl[0].formats;
      if (imageFormats.hasOwnProperty('large')) {
        return imageFormats.large.url;
      }
      return this.story.ImageUrl[0].url;
    },

    itemsToLoop() {
      if (process.browser) {
        if (window.innerWidth <= 768 && window.innerWidth > 475) {
          return this.stories.filter((item, index) => index < 3);
        } else if (window.innerWidth <= 475) {
          return this.stories.filter((item, index) => index < 2);
        } else {
          return this.stories.filter((item, index) => index < 4);
        }
      }
    },
    storyDate() {
      const month = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ];

      const date = new Date(this.story.date);
      const storyDay = date.getDate();
      const storyMonth = month[date.getMonth()];
      const storyYear = date.getFullYear();
      const storyDate = `${storyDay} ${storyMonth} ${storyYear}`;
      return storyDate;
    },
  },

  methods: {
    openSharePopup() {
      this.$store.commit('popup/openSharePopup');
    },
  },
};
</script>

<style scoped>
.individual-story {
  padding: 100px 0 160px;
}

.individual-story__lead {
  display: grid;
  grid-template-columns: 1fr fit-content(680px);
  column-gap: 60px;
  margin-bottom: 130px;
}

.individual-story__quote {
  font-weight: 400;
}

.individual-story__title {
  padding: 30px 0 0;
  border-top: 1px solid #efefef;
}

.individual-story__image-wrapper {
  width: 100%;
  grid-column: 1;
  grid-row: 1/3;
  align-self: center;
}

.individual-story__image {
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-size: cover;
  display: block;
}

.individual-story__info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 0 0 30px;
}

.individual-story__link,
.individual-story__date {
  font-size: 18px;
  line-height: 1.33;
  margin: 0;
}

.individual-story__text >>> p {
  margin: 0 0 36px;
}

.individual-story__text >>> blockquote {
  font-weight: 600;
  margin: 0;
}

.individual-story__conclusion {
  max-width: 780px;
  min-height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

@media screen and (max-width: 1280px) {
  .individual-story__lead {
    grid-template-columns: 1fr fit-content(602px);
    margin-bottom: 120px;
  }
}

@media screen and (max-width: 1024px) {
  .individual-story__lead {
    grid-template-columns: 1fr fit-content(477px);
    margin-bottom: 90px;
  }
  .individual-story__title {
    padding: 20px 0 0;
  }
  .individual-story__info {
    padding: 0 0 20px;
  }

  .individual-story__link,
  .individual-story__date {
    font-size: 16px;
    line-height: 1.5;
  }

  .individual-story__conclusion {
    min-height: 70px;
  }
}

@media screen and (max-width: 850px) {
  .individual-story__lead {
    grid-template-columns: 1fr fit-content(420px);
  }
}

@media screen and (max-width: 768px) {
  .individual-story {
    padding: 80px 24px 120px;
  }
  .individual-story__lead {
    display: block;
    margin-bottom: 100px;
  }
  .individual-story__title {
    padding: 20px 0 0;
    text-align: center;
  }

  .individual-story__image-wrapper {
    max-width: 420px;
    margin: 60px auto;
  }

  .individual-story__image {
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
    display: block;
  }
}

@media screen and (max-width: 475px) {
  .individual-story {
    padding: 50px 0 100px;
  }
  .individual-story__lead {
    margin-bottom: 40px;
  }
  .individual-story__image-wrapper {
    margin: 30px auto;
  }

  .individual-story__link,
  .individual-story__date {
    font-size: 13px;
    line-height: 1.23;
  }

  .individual-story__conclusion {
    min-height: 74px;
  }
}
</style>
