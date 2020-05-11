<template>
  <div>
    <page-header />
    <main>
      <nuxt />
    </main>
    <page-footer />
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
html {
  font-family: Inter, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
