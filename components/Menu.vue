<template>
  <nav class="menu">
    <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
    <nuxt-link to="/stories" class="menu-link">Истории</nuxt-link>
    <button class="button button_header">Рассказать историю</button>
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
}

.menu-link:hover {
  color: #121212;
  opacity: 0.8;
}

.nuxt-link-active {
  border-bottom: solid 2px #000;
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
}

.button_header:hover {
  color: #121212;
  opacity: 0.8;
}
</style>
