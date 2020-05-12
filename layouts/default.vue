<template>
  <div class="root">
    <page-header class="root__section" />
    <nuxt />
    <page-footer />
  </div>
</template>

<<<<<<< HEAD
<script></script>
=======
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
>>>>>>> 206569bf9ea9c0f556909faeef10bac5f03ac44e

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

.root__section {
  width: calc(100% - 120px);
  max-width: 1320px;
}

@media screen and (max-width: 1280px) {
  .root__section {
    width: calc(100% - 100px);
  }
}

@media screen and (max-width: 1280px) {
  .root__section {
    width: calc(100% - 100px);
  }
}

@media screen and (max-width: 768px) {
  .root__section {
    width: calc(100% - 80px);
  }
}

@media screen and (max-width: 320px) {
  .root__section {
    width: calc(100% - 30px);
  }
}
</style>
