<template>
  <header class="header">
    <popup v-if="popupActive">
      <form-stories/>
    </popup>
    <p class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <main-menu />
    <button-header @btnClick="popupToggle" class="button_header">Рассказать историю</button-header>
    <button-header class="button_header-mobile">
      <span class="button_header-mobile-body"></span>
      <span class="button_header-mobile-body"></span>
      <span class="button_header-mobile-body"></span>
    </button-header>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import Popup from '@@/components/Popup';
import FormStories from '@@/components/FormStories';
export default {
  components: {
    'main-menu': Menu,
    'button-header': Button,
    'popup': Popup,
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
.header {
  min-height: 76px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
}

.header__logo {
  width: 340px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-right: auto;
}
.button_header {
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
.button_header:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
.button_header-mobile {
  flex-direction: column;
  background-color: transparent;
  cursor: pointer;
  color: #121212;
  padding: 0;
  outline: 0;
  display: none;
}
.button_header-mobile-body {
  border-top: solid #000 3px;
  width: 32px;
  margin-bottom: 9px;
}
.button_header-mobile-body:last-child {
  margin-bottom: 0;
}
.button_header-mobile:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}
@media screen and (max-width: 1280px) {
  .header {
    min-height: 72px;
  }
  .header__logo {
    line-height: 1.12;
  }
  .button_header {
    font-size: 16px;
  }
}
@media screen and (max-width: 768px) {
  .button_header {
    display: none;
  }
  .button_header-mobile {
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
