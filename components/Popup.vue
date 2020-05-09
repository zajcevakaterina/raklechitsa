<template>
  <div>
    <form class="form">
      <div class="form-header">
        <p class="form-steps">Шаг 1 из 12</p>
        <button class="form-button-close">+</button>
      </div>
      <p class="form-description">Как вас зовут?</p>
      <p class="form-write-here">Напишите тут</p>
      <textarea class="form-textarea"></textarea>
      <button class="form-button-back">Назад</button>
      <button class="form-button-next">Далее</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  width: 1010px;
  min-height: 655px;
  border: 1px solid blue;
  margin: auto;
  /* margin-top: 100px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
}

.form-steps {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 40px;
}

.form-header {
  display: flex;
  justify-content: space-between;
}

.form-button-close {
  border: none;
  background: none;
  padding: 0;
  transform: rotate(-45deg);
  font-size: 45px;
  margin-right: 35px;
  margin-bottom: 20px;
}

.form-description {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 5px 40px;
}

.form-write-here {
  margin: 155px 40px 0;
  font-style: normal;
  font-family: Inter;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
}

.form-textarea {
  border: none;
  border-top: 1px solid #e7e7e7;
  resize: none;
  width: 930px;
  margin: 10px 40px;
  padding: 0;
}

.form-button-back {
  font-size: 16px;
  line-height: 19px;
  border: none;
  background: none;
  color: #c0c0c0;
  padding-left: 40px;
  padding-right: 33px;
  margin-top: 130px;
}

.form-button-next {
  font-size: 16px;
  line-height: 19px;
  border: none;
  margin-top: 175px;
  background: #714dbd;
  padding: 20px 103px;
  margin-bottom: 40px;
  color: #ffffff;
}

.form-span {
  color: #666666;
}

.form-footer {
  display: flex;
}

.personal-data {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
  margin-left: 30px;
  margin-right: 250px;
  margin-top: 185px;
}

.personal-link {
  color: #666666;
}

.form-steps-final {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 280px 0;
  width: 450px;
}

.form-button-next_final {
  margin-top: 500px;
  margin-left: 382px;
}

.aaa {
  display: flex;
  flex-direction: column;
}
</style>
