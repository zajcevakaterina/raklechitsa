<template>
  <form class="stories-form">
    <form-title class="stories-form__steps">{{ step }}</form-title>
    <p class="stories-form__question">{{ question }}</p>
    <inputform
      class="stories-form__input"
      :type="'text'"
      :name="question"
      :required="'required'"
    />
    <div class="stories-form__buttons">
      <button-form
        class="stories-form__button stories-form__button_direction_back"
        >Назад</button-form
      >
      <button-form
        class="stories-form__button stories-form__button_direction_next"
        >Далее</button-form
      >
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';
import SectionTitle from '@/components/ui/SectionTitle';

export default {
  components: {
    'button-form': Button,
    inputform: InputForm,
    'form-title': SectionTitle,
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
.stories-form__steps {
  margin: 0 0 40px;
}
.stories-form__question {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  margin: 40px 0 0;
  min-height: 72px;
}

.stories-form__input {
  margin: 86px 0 0;
}

.stories-form__buttons {
  display: flex;
  margin-top: 210px;
}

.stories-form__button_direction_back {
  background: none;
  color: #c0c0c0;
  padding: 0;
}

.stories-form__button_direction_next {
  font-weight: 500;
  width: 226px;
  padding: 16px 0;
  color: #ffffff;
  margin-left: 30px;
}

@media screen and (max-width: 1280px) {
  .stories-form__steps {
    line-height: 1.14;
  }

  .stories-form__buttons {
    margin-top: 170px;
  }

  .stories-form__button_direction_next {
    width: 200px;
  }
}

@media screen and (max-width: 1024px) {
  .stories-form__buttons {
    margin-top: 174px;
  }
}

@media screen and (max-width: 768px) {
  .stories-form__question {
    font-size: 15px;
    line-height: 1.27;
    margin: 40px 0 0;
    min-height: 68px;
  }

  .stories-form__input {
    margin: 30px 0 0;
  }
}

@media screen and (max-width: 320px) {
  .stories-form__steps {
    margin: 0 0 30px;
  }

  .stories-form__buttons {
    margin-top: 257px;
  }

  .stories-form__button_direction_next {
    width: 206px;
  }
}
</style>
