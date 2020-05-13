<template>
  <div class="form">
    <h2 class="form__steps">{{ step }}</h2>
    <h3 class="form__question">{{ question }}</h3>
    <InputForm class="form__input" />
    <div class="form__buttons">
      <FormButtonPrev class="form__button-back" />
      <FormButtonNext class="form__button-next" />
    </div>
  </div>
</template>

<script>
import FormButtonNext from '@@/components/ui/FormButtonNext';
import FormButtonPrev from '@@/components/ui/FormButtonPrev';
import InputForm from '@@/components/ui/InputForm';
export default {
  components: {
    FormButtonNext,
    FormButtonPrev,
    InputForm,
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
.form-steps {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.form__question {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 40px;
}

.form__buttons {
  display: flex;
  margin-top: 200px;
}

.form__input {
  margin-top: 135px;
}

.form__button-back {
  margin-top: 15px;
}

.form__button-next {
  margin-left: 30px;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .form-steps {
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

  .form__button-back {
    margin-top: 10px;
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

  .form__button-back {
    margin-top: 10px;
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

  .form__button-back {
    margin-top: 10px;
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
    margin-top: 10px;
  }

  .form__button-next {
    margin-left: 15px;
  }
}
</style>
