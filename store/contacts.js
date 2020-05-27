export const state = () => ({
  answers: {},
  questions: QUESTIONS,
});

export const mutations = {
  saveAnswers(state, { answer }) {
    state.answers = answer;
    console.log(state.answers);
  },
};

export const getters = {
  getQuestions(state) {
    return state.questions;
  },
};

const QUESTIONS = {
  1: {
    question: 'Как вас зовут?',
    key: 'name',
  },
  2: {
    question: 'Электронная почта',
    key: 'email',
  },
  3: {
    question: 'Телефон',
    key: 'phone',
  },
  4: {
    question:
      'Напишите, если есть предпочтительный способ связи и удобное время',
    key: 'preferred',
  },
};
