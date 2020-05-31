<template>
  <div class="mobile-button" @click="toggleMobile">
    <open-icon class="mobile-button__open-icon" v-if="!isMenuOpened" />
    <close-icon class="mobile-button__close-icon" v-else />
  </div>
</template>

<script>
import MobileMenuOpenIcon from '@/components/svg/MobileMenuOpenIcon';
import MobileMenuCloseIcon from '@/components/svg/MobileMenuCloseIcon';
export default {
  components: {
    'open-icon': MobileMenuOpenIcon,
    'close-icon': MobileMenuCloseIcon,
  },
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 32px;
  height: 27px;
  background-size: contain;
}

@media screen and (max-width: 320px) {
  .mobile-button {
    width: 26px;
    height: 23px;
  }
}
</style>
