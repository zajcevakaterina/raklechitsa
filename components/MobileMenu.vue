<template>
  <nav class="mobile-menu">
    <ul class="mobile-menu__links">
      <li class="mobile-menu__link-wrapper">
        <nuxt-link to="/" class="mobile-menu__link">Главная</nuxt-link>
      </li>
      <li class="mobile-menu__link-wrapper">
        <nuxt-link to="/stories" class="mobile-menu__link">Истории</nuxt-link>
      </li>
    </ul>
    <menu-button class="mobile-menu__button">Рассказать историю</menu-button>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
  'menu-button': Button,
};
</script>

<style scoped>
.mobile-menu {
  margin-right: auto;
}

.mobile-menu__links {
  display: flex;
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
  font-size: 16px;
  line-height: 24px;
  display: inline;
  margin: auto 0;
}
</style>
