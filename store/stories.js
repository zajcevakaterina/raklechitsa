import axios from 'axios';

export const state = () => ({
  stories: [],
  carrentStory: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStories({ commit }) {
    const stories = await this.$axios.$get('https://strapi.kruzhok.io/stories');
    commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
  fetchStoriesWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'carrentStory',
          value: response.data,
        });
      });
  },
};
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCarrentsStory(state) {
    return state.carrentStory;
  },
};
