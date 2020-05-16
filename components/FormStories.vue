<template>
  <div>
    <h2 class="form__steps">{{ step }}</h2>
    <div></div>
    <h3 class="form__question">{{ question }}</h3>
    <inputform class="form__input" />
    <div class="form__buttons">
      <button class="form__button-back">Назад</button>
      <button class="form__button-next">Далее</button>
    </div>
  </div>
</template>

<script>
import Button from '@@/components/ui/Button';
import InputForm from '@@/components/ui/InputForm';
export default {
  components: {
    button: Button,
    inputform: InputForm,
  },

  props: {
    step: {
      type: String,
      default: 'Шаг 1 из 12',
    },
    question: {
      type: String,
      default: 'Как вас зовут?',
    },
  },
};
</script>

<style scoped>
.form__steps {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
}
.form__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 0;
}

.form__buttons {
  display: flex;
  margin-top: 200px;
}

.form__input {
  margin-top: 135px;
}

.form__button-back {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background: none;
  color: #c0c0c0;
}

.form__button-next {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background: #714dbd;
  padding: 16px 80px;
  color: #ffffff;
  margin-left: 30px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .form__steps {
    font-size: 28px;
    line-height: 32px;
  }
  .form__question {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
  }

  .form__buttons {
    margin-top: 174px;
  }

  .form__input {
    margin-top: 100px;
  }

  .form__button-next {
    padding: 14px 67px;
  }

  .form__button-back {
    font-size: 16px;
    line-height: 19px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .form-steps {
    font-size: 26px;
    line-height: 30px;
  }
  .form__question {
    font-size: 15px;
    line-height: 24px;
    margin-top: 40px;
  }

  .form__buttons {
    margin-top: 174px;
  }

  .form__input {
    margin-top: 100px;
  }

  .form__button-next {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 67px;
  }

  .form__button-back {
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .form-steps {
    font-size: 26px;
    line-height: 30px;
  }
  .form__question {
    font-size: 15px;
    line-height: 24px;
    margin-top: 40px;
  }

  .form__buttons {
    margin-top: 174px;
  }

  .form__input {
    margin-top: 100px;
  }

  .form__button-next {
    font-size: 15px;
    line-height: 18px;
    padding: 13px 67px;
  }

  .form__button-back {
    font-size: 15px;
    line-height: 18px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .form-steps {
    font-size: 18px;
    line-height: 21px;
  }
  .form__question {
    font-size: 13px;
    line-height: 16px;
    margin-top: 30px;
  }

  .form__buttons {
    margin-top: 258px;
  }

  .form__input {
    margin-top: 100px;
  }

  .form__button-back {
    font-size: 13px;
    line-height: 16px;
  }

  .form__button-next {
    margin-left: 15px;
    font-size: 13px;
    line-height: 16px;
    padding: 12px 82px;
  }
}
</style>
