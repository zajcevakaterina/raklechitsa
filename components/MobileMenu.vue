<template>
  <nav class="mobile-menu">
    <popup v-if="popupActive" @closePopup="popupToggle">
      <form-stories />
    </popup>
    <container class="mobile-menu__container">
      <ul class="mobile-menu__links">
        <li class="mobile-menu__link-wrapper">
          <nuxt-link to="/" class="mobile-menu__link">Главная</nuxt-link>
        </li>
        <li class="mobile-menu__link-wrapper">
          <nuxt-link to="/stories" class="mobile-menu__link">Истории</nuxt-link>
        </li>
      </ul>
      <menu-button @btnClick="popupToggle" class="mobile-menu__button"
        >Рассказать историю</menu-button
      >
    </container>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
import Container from '@/components/Container';
import Popup from '@/components/Popup';
import FormStories from '@/components/FormStories';

export default {
  components: {
    'menu-button': Button,
    container: Container,
    popup: Popup,
    'form-stories': FormStories,
  },

  methods: {
    popupToggle() {
      this.popupActive = !this.popupActive;
    },
  },

  data() {
    return {
      popupActive: false,
    };
  },
};
</script>

<style scoped>
.mobile-menu {
  display: none;
  border-bottom: 1px solid #e8e8e8;
}

.mobile-menu__container {
  display: flex;
}

.mobile-menu__links {
  display: flex;
  padding: 0;
}

.mobile-menu__link-wrapper {
  list-style-type: none;
}

.mobile-menu__link {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  margin-right: 30px;
}

.mobile-menu__button {
  background-color: transparent;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  width: fit-content;
}

@media screen and (max-width: 768px) {
  .mobile-menu {
    display: block;
  }
}

@media screen and (max-width: 400px) {
  .mobile-menu__container {
    flex-direction: column;
  }

  .mobile-menu__links {
    flex-direction: column;
    margin-bottom: 0;
  }

  .mobile-menu__link-wrapper {
    padding-bottom: 16px;
  }

  .mobile-menu__link {
    font-size: 13px;
    line-height: 16px;
  }

  .mobile-menu__button {
    font-size: 13px;
    line-height: 16px;
    padding-bottom: 18px;
  }
}
</style>
