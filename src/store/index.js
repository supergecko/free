import Vue from 'vue'
import Vuex from 'vuex'

import { getItem, setItem } from '@/utils/local'

const USERKEY = 'userKey'
const TOKEN = 'token'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userKey: getItem(USERKEY),
	isLogin:false,
	token:getItem(TOKEN),
	userInfo:getItem('userInfo')
  },
  mutations: {
    setUser(state, userKey) {
      state.userKey = userKey
      setItem(USERKEY, userKey)
    },
	setToken(state, token) {
	  state.token = token
	  setItem(TOKEN, token)
	},
	setUserInfo(state, userInfo) {
	  state.userInfo = userInfo
	  setItem('userInfo', userInfo)
	},
	LogOut(state){
	  state.isLogin = false
	  state.userKey = null
	  state.token = null
	  state.userInfo = null
	  setItem(USERKEY, null)
	  setItem(TOKEN, null)
	  setItem('userInfo', null)
	}
  },
  actions: {
  },
  modules: {
  }
})
