<template>
  <main class="content">
    <cover />
    <container>
      <intro
        :tagLeadIntroTitle="tagLeadIntroBlock.title"
        :tagLeadHashtag="tagLeadIntroBlock.hashtag"
      />

      <stories :stories="itemsToLoop" />

      <a class="more-stories-link" href="stories">
        <p class="more-stories-link__text">Больше статей</p>
      </a>

      <instagram
        :tagLeadInstaTitle="tagLeadInstaBlock.title"
        :tagLeadInstaHashtag="tagLeadInstaBlock.hashtag"
      />
      <div class="insta__container">
        <div class="insta__desc">
          <a
            class="insta__title-link"
            href="https://www.instagram.com/raklechitsa/"
            target="blank"
          >
            <section-title class="insta__title">{{
              instagramBlock.title
            }}</section-title>
          </a>
          <section-text class="insta__text" v-html="instagramBlock.text">
          </section-text>
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
    </container>

    <call-to-action />
    <container>
      <statistics />
    </container>

    <about />
    <popup
      v-if="popupContactsShown"
      @closePopup="closeContactsPopup"
      @overlayClick="closeContactsPopup"
    >
      <contacts />
    </popup>
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
import Instagram from '@/components/blocks/Instagram';
import CallToAction from '@/components/blocks/CallToAction';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';
import TagLead from '@/components/TagLead';
import Button from '@/components/ui/Button';
import Popup from '@/components/ui/Popup';
import Contacts from '@/components/Contacts';

export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    cover: Cover,
    intro: Intro,
    stories: Stories,
    'insta-photo': InstaPhoto,
    instagram: Instagram,
    'call-to-action': CallToAction,
    statistics: Statistics,
    about: About,
    'tag-lead': TagLead,
    'stories-button': Button,
    container: Container,
    popup: Popup,
    contacts: Contacts,
  },

  computed: {
    photos() {
      return this.$store.getters['insta/getPhotos'];
    },
    stories() {
      return this.$store.getters['stories/getStories'];
    },
    itemsToLoop() {
      if (process.browser) {
        if (window.innerWidth <= 768 && window.innerWidth > 475) {
          return this.stories.filter((item, index) => index < 9);
        } else if (window.innerWidth <= 475) {
          return this.stories.filter((item, index) => index < 6);
        } else {
          return this.stories.filter((item, index) => index < 8);
        }
      }
    },
    popupContactsShown() {
      return this.$store.getters['popup/getPopupContactsShown'];
    },
    tagLeadIntroBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('note-1');
    },
    tagLeadInstaBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('note-2');
    },
    instagramBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('instagram');
    },
  },

  methods: {
    closeContactsPopup() {
      this.$store.commit('popup/closeContactsPopup');
    },
  },
  async fetch({ store }) {
    await store.dispatch('stories/fetchStories');
    await store.dispatch('statistics/fetchStats');
    await store.dispatch('blocks/fetchBlocks');
    await store.dispatch('video/fetchVideo');
  },
};
</script>

<style scoped>
@import url(@/blocks/more-stories-link/more-stories-link.css);
@import url(@/blocks/insta/insta.css);
</style>
