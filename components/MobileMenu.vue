<template>
  <nav class="mobile-menu">
    <container class="mobile-menu__container">
      <nav class="mobile-menu__wrapper">
        <ul class="mobile-menu__links">
          <li class="mobile-menu__link-wrapper">
            <nuxt-link to="/" class="mobile-menu__link">Главная</nuxt-link>
          </li>
          <li class="mobile-menu__link-wrapper">
            <nuxt-link to="/stories" class="mobile-menu__link"
              >Истории</nuxt-link
            >
          </li>
        </ul>
        <menu-button @btnClick="openQuizPopup" class="mobile-menu__button"
          >Рассказать историю</menu-button
        >
      </nav>
    </container>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
import Container from '@/components/Container';

export default {
  components: {
    'menu-button': Button,
    container: Container,
  },

  methods: {
    openQuizPopup() {
      this.$store.commit('popup/openQuizPopup');
    },
  },
};
</script>

<style scoped>
.mobile-menu {
  display: none;
  border-bottom: 1px solid #e8e8e8;
}

.mobile-menu__wrapper {
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
  .mobile-menu__wrapper {
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
