// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      selectedShowtime: null
    };
  },
  mutations: {
    setSelectedShowtime(state, showtime) {
      state.selectedShowtime = showtime;
    }
  }
});

export default store;
