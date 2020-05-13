<template>
  <input class="input" placeholder="Напишите тут" />
</template>

<script>
export default {};
</script>

<style scoped>
.input {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  resize: none;
  width: 840px;
  padding: 0;
  padding-bottom: 10px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .input {
    font-size: 16px;
    line-height: 24px;
    width: 720px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .input {
    font-size: 15px;
    line-height: 24px;
    width: 720px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .input {
    font-size: 15px;
    line-height: 24px;
    width: 500px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .input {
    font-size: 13px;
    line-height: 16px;
    width: 260px;
    padding-bottom: 2px;
  }
}
</style>
