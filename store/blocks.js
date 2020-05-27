import axios from 'axios';

export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
  findCurrentBlock(state, blockToFind) {
    return state.blocks.find(block => block.block === blockToFind);
  },
};

export const actions = {
  async fetchBlocks({ commit }) {
    const blocks = await this.$axios.$get(process.env.BASE_URL + '/blocks');
    commit('setState', {
      name: 'blocks',
      value: blocks,
    });
  },
};

export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
};
