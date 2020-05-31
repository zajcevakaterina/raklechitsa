<template>
  <div class="root">
    <mobile-menu v-if="isMobileMenuOpened" />
    <page-header />
    <nuxt />
    <page-footer />

    <popup-fade>
      <popup
        v-if="popupQuizShown"
        @closePopup="closeQuizPopup"
        @overlayClick="closeQuizPopup"
      >
        <quiz />
      </popup>
    </popup-fade>

    <popup-fade>
      <popup
        v-if="popupShareShown"
        @closePopup="closeSharePopup"
        @overlayClick="closeSharePopup"
      >
        <social-share />
      </popup>
    </popup-fade>
  </div>
</template>

<script>
import MobileMenu from '@/components/ui/MobileMenu';
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Popup from '@/components/ui/Popup';
import Qiuz from '@/components/blocks/Quiz';
import SocialShare from '@/components/blocks/SocialShare';
import PopupFade from '@/components/ui/PopupFade';

export default {
  components: {
    'mobile-menu': MobileMenu,
    'page-header': Header,
    'page-footer': Footer,
    popup: Popup,
    quiz: Qiuz,
    'social-share': SocialShare,
    'popup-fade': PopupFade,
  },
  computed: {
    popupQuizShown() {
      return this.$store.getters['popup/getPopupQuizShown'];
    },
    popupShareShown() {
      return this.$store.getters['popup/getPopupShareShown'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
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
