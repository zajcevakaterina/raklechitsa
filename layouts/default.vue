<template>
  <div class="root">
    <page-header />

    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
export default {
  components: {
    'page-header': Header,
    'page-footer': Footer,
  },
  head: {
    title: 'РАКЛЕЧИТСЯ.РФ - истории людей, победивших рак, но не свои привычки',
  },
};
</script>

<style>
body {
  margin: 0;
}
/* TODO: временное решение, пока не найду способа добраться до body и поставить ему класс */
.root {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0 auto;
}

</style>
