export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: QUESTIONS,
  result: {},
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
    console.log(state.answers);
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
  setAnswersEmpty(state, { answers }) {
    state.answers = answers;
  },

  setResult(state, { result }) {
    state.result = result;
    console.log(state.result);
  },
};

export const actions = {
  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { currentQuestion, questions } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    if (currentQuestion === questions.length) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  async PREV_QUESTION({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },

  async FIRST_STEP({ commit, state }) {
    const { currentQuestion, answers } = state;
    await commit('setCurrentQuestion', {
      currentQuestion: 1,
    });
    await commit('setAnswersEmpty', {
      answers: {},
    });
  },

  async GET_RESULT({ commit, state }) {
    const { questions, answers } = state;
    const result = Object.keys(questions).reduce((sum, item) => {
      sum[questions[item].key] = answers[item];
      return sum;
    }, {});
    await commit('setResult', {
      result: result,
    });
  },
};

const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 13',
    questionMain: 'Как вас зовут?',
    key: 'name',
  },
  2: {
    title: 'Шаг 2 из 13',
    questionMain: 'Было ли у вас онкологическое заболевание?',
    questionAdditional:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    key: 'cancerStory',
  },
  // 3: {
  //   title: 'Шаг 3 из 13',
  //   questionMain: 'Какие занятия приносят Вам наибольшее удовольствие?',
  //   questionAdditional:
  //     'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  //   key: 'pleasureActivities',
  // },
  // 4: {
  //   title: 'Шаг 4 из 13',
  //   questionMain: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
  //   key: 'commonActivities',
  // },
  // 5: {
  //   title: 'Шаг 5 из 13',
  //   questionMain: 'Какие сильные увлечения у Вас есть?',
  //   questionAdditional:
  //     'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  //   key: 'hobbies',
  // },
  // 6: {
  //   title: 'Шаг 6 из 13',
  //   questionMain:
  //     'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
  //   key: 'habits',
  // },
  // 7: {
  //   title: 'Шаг 7 из 13',
  //   questionMain:
  //     'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
  //   questionAdditional: 'Кроме необходимых, таких, как чистка зубов.',
  //   key: 'regularActivities',
  // },
  // 8: {
  //   title: 'Шаг 8 из 13',
  //   questionMain:
  //     'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
  //   key: 'aloneActivities',
  // },
  // 9: {
  //   title: 'Шаг 9 из 13',
  //   questionMain: 'Что Вас успокаивает/умиротворяет лучше всего?',
  //   key: 'calmDownActivities',
  // },
  // 10: {
  //   title: 'Шаг 10 из 13',
  //   questionMain:
  //     'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
  //   key: 'events',
  // },
  // 11: {
  //   title: 'Шаг 11 из 13',
  //   questionMain: 'Как вы обычно проводите выходные?',
  //   key: 'weekends',
  // },
  // 12: {
  //   title: 'Шаг 12 из 13',
  //   questionMain: 'Ваш номер телефона для связи.',
  //   key: 'phone',
  // },
  // 13: {
  //   title: 'Шаг 13 из 13',
  //   questionMain: 'Ваша почта для связи.',
  //   questionAdditional:
  //     'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
  //   key: 'email',
  // },
};
