<template>
  <form class="quiz">
    <h3 class="quiz__title">{{ currentQuestion.title }}</h3>
    <p class="quiz__question">
      {{ currentQuestion.questionMain }}
      <span
        class="quiz__question_type_additional"
        v-if="currentQuestion.questionAdditional"
      >
        {{ currentQuestion.questionAdditional }}</span
      >
    </p>
    <quiz-input
      class="quiz__input"
      :type="'text'"
      v-model="answer"
      placeholder="Напишите тут"
    />
    <div class="quiz__buttons">
      <quiz-button
        @btnClick="prevQuestion"
        class="quiz__button quiz__button_direction_back"
        >Назад</quiz-button
      >
      <quiz-button
        @btnClick="nextQuestion"
        class="quiz__button quiz__button_direction_next"
        >Далее</quiz-button
      >
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default {
  components: {
    'quiz-button': Button,
    'quiz-input': Input,
  },

  data() {
    return {
      answer: '',
    };
  },

  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },

    initialAnswer() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      console.log(answers);
      console.log(answers[currentQuestion]);
      return answers[currentQuestion] || '';
    },
  },

  methods: {
    async nextQuestion() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer;
    },
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer;
    },
  },
};
</script>

<style scoped>
.quiz__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  margin: 0 0 40px;
}
.quiz__question {
  font-size: 18px;
  line-height: 1.33;
  margin: 40px 0 0;
  min-height: 72px;
  font-weight: 500;
}

.quiz__question_type_additional {
  font-weight: 400;
  color: #666666;
}

.quiz__input {
  margin: 86px 0 0;
}

.quiz__buttons {
  display: flex;
  margin-top: 210px;
}

.quiz__button_direction_back {
  background: none;
  color: #c0c0c0;
  padding: 0;
}

.quiz__button_direction_next {
  font-weight: 500;
  width: 226px;
  padding: 16px 0;
  color: #ffffff;
  margin-left: 30px;
}

@media screen and (max-width: 1280px) {
  .quiz__title {
    font-size: 28px;
    line-height: 1.14;
  }

  .quiz__buttons {
    margin-top: 170px;
  }

  .quiz__button_direction_next {
    width: 200px;
  }
}

@media screen and (max-width: 1024px) {
  .quiz__title {
    font-size: 26px;
    line-height: 1.15;
  }
  .quiz__buttons {
    margin-top: 174px;
  }
}

@media screen and (max-width: 768px) {
  .quiz__question {
    font-size: 15px;
    line-height: 1.27;
    margin: 40px 0 0;
    min-height: 68px;
  }

  .quiz__input {
    margin: 30px 0 0;
  }
}

@media screen and (max-width: 320px) {
  .quiz__title {
    font-size: 18px;
    line-height: 1.17;
    margin: 0 0 30px;
  }

  .quiz__buttons {
    margin-top: 257px;
  }

  .quiz__button_direction_next {
    width: 206px;
  }
}
</style>
