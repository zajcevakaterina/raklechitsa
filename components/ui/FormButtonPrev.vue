<template>
  <div>
    <button class="button">Назад</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background: none;
  color: #c0c0c0;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .button {
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .button {
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .button {
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .button {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
