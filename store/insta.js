export const state = () => ({
  instagram: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

export const actions = {
  async fetchPhotos({ commit }) {
    const data = await this.$axios.$get(process.env.INSTA_URL);
    const instagram = getPosts(data);
    commit('setState', {
      name: 'instagram',
      value: instagram,
    });
  },
};

export const getters = {
  getPhotos(state) {
    return state.instagram;
  },
};
