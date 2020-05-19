<template>
  <div class="root">
    <mobile-menu v-if="isMobileMenuOpened" />
    <page-header />
    <popup
      v-if="popupQuizShown"
      @closePopup="closeQuizPopup"
      @overlayClick="closeQuizPopup"
    >
      <quiz />
    </popup>
    <nuxt />
    <page-footer />
    <popup
      v-if="popupShareShown"
      @closePopup="closeSharePopup"
      @overlayClick="closeSharePopup"
    >
      <social-share />
    </popup>
  </div>
</template>

<script>
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Popup from '@/components/ui/Popup';
import Qiuz from '@/components/Quiz';
import SocialShare from '@/components/SocialShare';
export default {
  components: {
    'mobile-menu': MobileMenu,
    'page-header': Header,
    'page-footer': Footer,
    popup: Popup,
    quiz: Qiuz,
    'social-share': SocialShare,
  },
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  head: {
    title: 'РАКЛЕЧИТСЯ.РФ - истории людей, победивших рак, но не свои привычки',
  },

  computed: {
    popupQuizShown() {
      return this.$store.getters['popup/getPopupQuizShown'];
    },
    popupShareShown() {
      return this.$store.getters['popup/getPopupShareShown'];
    },
  },
  methods: {
    closeQuizPopup() {
      this.$store.commit('popup/closeQuizPopup');
    },
    closeSharePopup() {
      this.$store.commit('popup/closeSharePopup');
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
/* TODO: временное решение, пока не найду способа добраться до body и поставить ему класс */
.root {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
}
</style>
