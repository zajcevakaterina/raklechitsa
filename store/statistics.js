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
    return state.statistics;
  },
};
