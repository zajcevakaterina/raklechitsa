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

// export const getters = {
//   getStatistics(state) {
//     const hardCodeStat = state.statistics.map(function(stat) {
//       if (stat.id === 3) {
//         stat.oldValue = stat.oldValue ? stat.oldValue : 60;
//         stat.currentValue = stat.currentValue ? stat.currentValue : 88;
//       } else if (stat.id === 4) {
//         stat.oldValue = stat.oldValue ? stat.oldValue : 80;
//         stat.currentValue = stat.currentValue ? stat.currentValue : 55;
//       }
//       return stat;
//     });
//     // значения захардкодили, но обезопасили, если вдруг со стороны api они придут
//     return hardCodeStat;
//   },
// };
