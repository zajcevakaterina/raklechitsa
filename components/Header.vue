<template>
  <header class="header">
    <h1 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <nav class="menu header__menu">
      <ul class="rep">
        <li class="menu__element"><a class="menu__link">Главная</a></li>
        <li class="menu__element"><a class="menu__link">Истории</a></li>
        <li class="menu__element">
          <a class="menu__link">Рассказать историю</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.header {
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.header__menu {
  margin: 26px 60px;
}

.rep {
  display: flex;
  padding-left: 0;
}

.menu__element {
  list-style-type: none;
}

.menu__link {
  text-decoration: none;
}
</style>
