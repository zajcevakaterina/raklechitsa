import axios from 'axios';

export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStats({ commit }) {
    console.log('fetchStats вызвался');
    const statistics = await this.$axios.$get(
      process.env.BASE_URL + '/statistics'
    );
    commit('setState', {
      name: 'statistics',
      value: statistics,
    });
  },
};

export const getters = {
  getStatistics(state) {
    console.log(state.statistics);
    return state.statistics;
  },
};

// {
//   summary: '1 из 3',
//   source: 'Левада-Центр 2018',
//   description:
//     'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
//   oldValue: null,
//   currentValue: 48918000,
//   maxValue: 150000000,
//   id: 1,
// },
// {
//   summary: '3 700 000',
//   source: 'Росстат 2018',
//   description: '2,6% Россиян имеют онкозаболевания.',
//   oldValue: null,
//   currentValue: 3700000,
//   maxValue: 150000000,
//   id: 2,
// },
// {
//   summary: '↑28%',
//   source: 'МНИОИ Герцена 2018',
//   description:
//     'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
//   oldValue: 60,
//   // Old и current - вымышленные данные
//   currentValue: 88,
//   maxValue: 100,
//   id: 3,
// },
// {
//   summary: '↓25%',
//   source: 'МНИОИ Герцена 2018',
//   description:
//     'На 25% снизилась смертность в течение первого года после постановки диагноза.',
//   oldValue: 80,
//   // Old и current - вымышленные данные
//   currentValue: 55,
//   maxValue: 100,
//   id: 4,
// },
