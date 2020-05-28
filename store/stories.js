import axios from 'axios';

export const state = () => ({
  stories: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStories({ commit }) {
    const stories = await this.$axios.$get(process.env.BASE_URL + '/stories');
    commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
};
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getCurrentStory: state => storyId => {
    return state.stories.find(story => story.id === Number(storyId));
  },
};
