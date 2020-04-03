import Vue from "vue";
import Vuex from "vuex";
import { photos } from "./photos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos
  },
  getters: {
    forContestant: state => name => {
      return state.photos.filter(p => p.contestant === name);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
