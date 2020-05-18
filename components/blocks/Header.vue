<template>
  <header class="header">
    <popup v-if="popupActive" @closePopup="popupToggle">
      <form-stories />
    </popup>
    <container class="header__container">
      <p class="header__logo">
        Проект Благотворительного Фонда Константина Хабенского
      </p>
      <main-menu />
      <button-header @btnClick="popupToggle" class="header__button"
        >Рассказать историю</button-header
      >
      <mobile-button class="header__mobile-button" />
    </container>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';

import MobileMenuButton from '@/components/ui/MobileMenuButton';
import Popup from '@/components/Popup';
import FormStories from '@/components/FormStories';
import Container from '@/components/Container';

export default {
  components: {
    'main-menu': Menu,
    'button-header': Button,
    'mobile-button': MobileMenuButton,
    popup: Popup,
    'form-stories': FormStories,
    container: Container,
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
.header {
  min-height: 76px;
  box-sizing: border-box;
  margin: 0 auto;
  border-bottom: 1px solid #e8e8e8;
}

.header__container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header__logo {
  width: 340px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-right: auto;
}

.header__button {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #121212;
  padding: 0;
  outline: 0;
}

.header__button:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
.header__mobile-button {
  display: none;
}

.header__mobile-button:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
::v-deep .nuxt-link-exact-active {
  border-bottom: solid 2px;
}

@media screen and (max-width: 1280px) {
  .header {
    min-height: 72px;
  }
  .header__logo {
    line-height: 1.12;
  }
  .header__button {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .header__button {
    display: none;
  }
  .header__mobile-button {
    display: flex;
  }
}
@media screen and (max-width: 320px) {
  .header__logo {
    line-height: 1.17;
    width: 216px;
    font-size: 12px;
  }
}
</style>
