<template>
  <div class="error">
    <h1 class="error__title">404</h1>
    <p class="error__subtitle">Страница не найдена.</p>
    <nuxt-link to="/" class="error__link">Перейти на главную.</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 76px);
}

.error__title {
  font-weight: 400;
  font-size: 144px;
  line-height: 1.2;
  margin: 0 0 8px;
  text-align: center;
}

.error__title_type_other-mistake {
  line-height: 1.1;
  font-size: 100px;
}

.error__subtitle {
  font-size: 18px;
  line-height: 1.33;
  margin: 0 0 4px;
}

.error__link {
  font-size: 18px;
  line-height: 1.33;
  margin: 0;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
}

.error__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

@media screen and (max-width: 1280px) {
  .error {
    min-height: calc(100vh - 72px);
  }

  .error__subtitle,
  .error__link {
    font-size: 16px;
    line-height: 1.25;
  }
}

@media screen and (max-width: 768px) {
  .error__title_type_other-mistake {
    font-size: 56px;
  }
}

@media screen and (max-width: 540px) {
  .error {
    min-height: calc(100vh - 64px);
  }
}

@media screen and (max-width: 320px) {
  .error__title {
    font-size: 72px;
    margin: 0 0 4px;
  }
  .error__subtitle,
  .error__link {
    font-size: 13px;
    line-height: 1.23;
  }
  .error__title_type_other-mistake {
    font-size: 40px;
  }
}
</style>
