import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userId: null,
    userInfo: {},
    friendList: [],
    groupInfoList: [],
    verifyInfoList: [],
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserId(state, userId) {
      state.userId = userId
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeFriendList(state, friendList) {
      state.friendList = friendList
    },
    changeGroupInfoList(state, groupInfoList) {
      state.groupInfoList = groupInfoList
    },
    changeVerifyInfoList(state, verifyInfoList) {
      state.verifyInfoList = verifyInfoList
    }
  },
  actions: {
    login(context, payload) {
      let { userId, token } = payload
      context.commit("changeUserId", userId)
      context.commit("changeToken", token)
    },
    logout(context) {
      context.commit("changeToken", '')
      context.commit("changeUserInfo", {})
      context.commit("changeFriendList", [])
      context.commit("changeGroupInfoList", [])
    },
    setToken(context, token) {
      context.commit("changeToken", token)
    },
    clearToken(context) {
      context.commit("changeToken", '')
    },
    setUserId(context, userId) {
      context.commit("changeUserId", userId)
    },
    clearUserId(context) {
      context.commit("changeUserId", null)
    },
    setUserInfo(context, userInfo) {
      context.commit("changeUserInfo", userInfo)
    },
    clearUserInfo(context) {
      context.commit("changeUserInfo", {})
    },
    setFriendList(context, friendList) {
      context.commit("changeFriendList", friendList)
    },
    clearFriendList(context) {
      context.commit("changeFriendList", [])
    },
    setGroupInfoList(context, groupInfoList) {
      context.commit("changeGroupInfoList", groupInfoList)
    },
    clearGroupInfoList(context) {
      context.commit("changeGroupInfoList", [])
    },
    setVerifyInfoList(context, verifyInfoList) {
      context.commit("changeVerifyInfoList", verifyInfoList)
    },
    clearVerifyInfoList(context) {
      context.commit("changeVerifyInfoList", [])
    },
  },
  getters: {
    getToken(state, getters) {
      return state.token
    },
    getUserInfo(state, getters) {
      return state.userInfo
    },
    getUserId(state, getters) {
      return state.userId
    },
    getFriendList(state, getters) {
      return state.friendList
    },
    getFriendIds(state, getters) {
      return state.friendList.map(item => item.friendId)
    },
    getGroupInfoList(state, getters) {
      return state.groupInfoList
    },
    getVerifyInfoList(state, getters) {
      return state.verifyInfoList
    }
  },
  modules: {}
})
