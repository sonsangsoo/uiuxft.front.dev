import * as api from '../services'
import * as types from './mutation-types'

const state = {
  isAuthenticated: true,
  userInfo: { custNm: '이월이', juminBizNo: '8706302268218', auth_id: [] },
}

const getters = {
  userInfo: (state) => state.userInfo,
}

const actions = {
  getUser({ commit }, params) {
    return api.getUser(params).then((res) => {
      const data = res.data
      const userInfo = data
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      return commit(types.GET_USERINFO, {
        userInfo: userInfo,
      })
    })
  },
}

export default {
  state,
  getters,
  actions,
}
