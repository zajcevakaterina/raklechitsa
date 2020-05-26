import axios from 'axios';

export const state = () => ({
  videos: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  //   async fetchVideo({ commit }) {
  //     const videos = await this.$axios.$get(process.env.BASE_URL + '/videos');
  //     commit('setState', {
  //       name: 'videos',
  //       value: videos,
  //     });
  //   },
  // };
  fetchVideo(state) {
    return axios.get(process.env.BASE_URL + `/videos`).then(response => {
      return state.commit('setState', {
        name: 'videos',
        value: response.data,
      });
    });
  },
};

export const getters = {
  getVideo(state) {
    return state.videos;
  },
};
