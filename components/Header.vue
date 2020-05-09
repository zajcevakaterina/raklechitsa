<template>
  <header class="header">
    <p class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <main-menu />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  components: {
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 76px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}
.header__logo {
  width: 340px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
</style>
