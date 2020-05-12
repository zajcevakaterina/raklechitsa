<template>
  <div class="root">
    <page-header class="root__section" />
    <main>
      <nuxt />
    </main>
    <page-footer class="root__section" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    'page-header': Header,
    'page-footer': Footer,
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

.root__section {
  width: calc(100% - 120px);
  max-width: 1440px;
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
