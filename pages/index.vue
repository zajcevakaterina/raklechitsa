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

      <instagram />
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
import Cover from '@/components/blocks/Cover';
import Intro from '@/components/blocks/Intro';
import Stories from '@/components/blocks/Stories';
import InstaPhoto from '@/components/InstaPhoto';
import Instagram from '@/components/blocks/Instagram';
import CallToAction from '@/components/blocks/CallToAction';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';
import Popup from '@/components/ui/Popup';
import Contacts from '@/components/Contacts';

export default {
  components: {
    cover: Cover,
    intro: Intro,
    stories: Stories,
    instagram: Instagram,
    'call-to-action': CallToAction,
    statistics: Statistics,
    about: About,
    container: Container,
    popup: Popup,
    contacts: Contacts,
  },

  computed: {
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
    await store.dispatch('insta/fetchPhotos');
  },
};
</script>

<style scoped>
@import url(@/blocks/more-stories-link/more-stories-link.css);
</style>
