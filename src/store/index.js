import Vue from 'vue'
import Vuex from 'vuex'

import { getItem, setItem } from '@/utils/local'

const USERKEY = 'userKey'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userKey: getItem(USERKEY),
	isLogin:false
  },
  mutations: {
    setUser(state, userKey) {
      state.userKey = userKey
      setItem(USERKEY, userKey)
    }
  },
  actions: {
  },
  modules: {
  }
})
