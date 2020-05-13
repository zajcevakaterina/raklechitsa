<template>
  <div>
    <button class="form__button">Далее</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form__button {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background: #714dbd;
  padding: 16px 80px;
  color: #ffffff;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .form__button {
    padding: 14px 67px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .form__button {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 67px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .form__button {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 67px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .form__button {
    font-size: 13px;
    line-height: 16px;
    padding: 12px 82px;
  }
}
</style>
