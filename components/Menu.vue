<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu-link">Истории</nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.menu-link {
  margin-right: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
  height: fit-content;
}

.menu-link:hover {
  color: #121212;
  opacity: 0.8;
}

.nuxt-link-active {
  border-bottom: 0px;
}
.nuxt-link-exact-active {
  border-bottom: solid 2px;
}

@media screen and (max-width: 1280px) {
  .menu-link {
    font-size: 16px;
  }
  .header__logo {
    line-height: 1.12;
  }
}
@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
