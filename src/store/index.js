import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: null,
    friendList: [],
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeFriendList(state, friendList) {
      state.friendList = friendList
    }
  },
  actions: {
    login(context, token) {
      context.commit("changeToken", token)
    },
    logout(context) {
      context.commit("changeToken", '')
    },
    setUserInfo(context, userInfo) {
      context.commit("changeUserInfo", userInfo)
    },
    clearUserInfo(context) {
      context.commit("changeUserInfo", null)
    },
    setFriendList(context, friendList) {
      context.commit("changeFriendList", friendList)
    },
    clearFriendList(context) {
      context.commit("changeFriendList", [])
    }
  },
  getters: {
    getToken(state, getters) {
      return state.token
    },
    getUserInfo(state, getters) {
      return state.userInfo
    },
    getUserId(state, getters) {
      return state.userInfo.id
    },
    getFriendList(state, getters) {
      return state.friendList
    },
    getFriendIds(state, getters) {
      return state.friendList.map(item => item.friendId)
    }
  },
  modules: {}
})
