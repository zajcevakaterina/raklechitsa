<template>
  <main class="content">
    <cover />

    <container>
      <intro />
      <stories :stories="itemsToLoop" />
      <more-link :whereToGo="'/stories'">Больше статей</more-link>
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
import Container from '@/components/ui/Container';
import Cover from '@/components/blocks/Cover';
import Intro from '@/components/blocks/Intro';
import Stories from '@/components/blocks/Stories';
import Instagram from '@/components/blocks/Instagram';
import CallToAction from '@/components/blocks/CallToAction';
import Statistics from '@/components/blocks/Statistics';
import About from '@/components/blocks/About';
import Popup from '@/components/ui/Popup';
import Contacts from '@/components/blocks/Contacts';
import MoreLink from '@/components/ui/MoreLink';

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
    'more-link': MoreLink,
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
  },

  methods: {
    closeContactsPopup() {
      this.$store.commit('popup/closeContactsPopup');
    },
  },
};
</script>

<style scoped></style>
