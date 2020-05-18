<template>
  <main class="content">
    <cover />
    <container>
      <intro />
      <stories />

      <a class="more-stories-link" href="stories">
        <p class="more-stories-link__text">Больше статей</p>
      </a>

      <section class="insta">
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
                :link="photo.instaLink"
                :urlPhotoImage="photo.instaImage"
              />
            </li>
          </ul>
        </div>
      </section>
    </container>

    <call-to-action />
    <container>
      <statistics />
    </container>

    <about />
  </main>
</template>

<script>
import Container from '@/components/Container';
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
    container: Container,
  },

  computed: {
    photos() {
      return this.$store.getters['insta/getPhotos'];
    },
  },
};
</script>

<style scoped>
@import url(@/blocks/more-stories-link/more-stories-link.css);
@import url(@/blocks/insta/insta.css);
</style>
