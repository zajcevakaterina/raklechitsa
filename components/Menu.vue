<template>
  <nav class="menu">
    <ul class="menu__links">
      <li class="menu__link-wrapper">
        <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
      </li>
      <li class="menu__link-wrapper">
        <nuxt-link to="/stories" class="menu__link">Истории</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu__links {
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}
.menu__link-wrapper {
  list-style-type: none;
}
.menu__link {
  margin-right: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000;
  height: fit-content;
}

.menu__link:hover {
  color: #121212;
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

.nuxt-link-active {
  border-bottom: 0px;
}

/*TODO нет ли дублирования с menu-link выше?*/
.nuxt-link-exact-active:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

@media screen and (max-width: 1280px) {
  .menu__link {
    font-size: 16px;
  }
  /*TODO нужен ли этот класс??*/
  .header__logo {
    line-height: 1.12;
  }
}

@media screen and (max-width: 950px) {
  .menu__links {
    flex-direction: column;
  }
  .menu__link-wrapper {
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }
}

@media screen and (max-width: 660px) {
  .menu__links {
    padding: 0 0 8px;
  }
  .menu__link-wrapper {
    margin-bottom: 8px;
  }
  .menu__link {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
