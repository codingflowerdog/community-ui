import Vue from 'vue'
import Vuex from 'vuex'
import * as board from "@/store/board";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board
  }
})
