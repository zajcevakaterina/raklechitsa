export const state = () => ({
  popupQuizShown: false,
  popupShareShown: false,
});

export const mutations = {
  openQuizPopup(state) {
    return (state.popupQuizShown = true);
  },
  closeQuizPopup(state) {
    return (state.popupQuizShown = false);
  },
  openSharePopup(state) {
    return (state.popupShareShown = true);
  },
  closeSharePopup(state) {
    return (state.popupShareShown = false);
  },
};

export const getters = {
  getPopupQuizShown(state) {
    return state.popupQuizShown;
  },
  getPopupShareShown(state) {
    return state.popupShareShown;
  },
};
