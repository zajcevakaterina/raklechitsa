<template>
  <header class="header">
    <p class="header__logo">
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <main-menu />
    <button class="button_header">Расскажи историю</button>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
export default {
  components: {
    'main-menu': Menu,
    button: Button,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 76px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 60px;
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
}

.button_header:hover {
  color: #121212;
  opacity: 0.8;
}
</style>
