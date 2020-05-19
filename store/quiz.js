export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: QUESTIONS,
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
};

export const actions = {
  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
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
};

const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 12',
    questionMain: 'Как вас зовут?',
  },
  2: {
    title: 'Шаг 2 из 12',
    questionMain: 'Было ли у вас онкологическое заболевание?',
    questionAdditional:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
  },
  3: {
    title: 'Шаг 3 из 12',
    questionMain: 'Какие занятия приносят Вам наибольшее удовольствие?',
    questionAdditional:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },
};
