import API from '@/services/users'

export default {
  namespace: 'users',
  state: [],

  effects: {
    *fetchUserList({payload}, {call, put, select}){
      const res = yield call(API.queryUserList)
      yield put({
        type: 'userList',
        payload: res
      })
    }
  },

  reducers: {
    userList(state,{payload}){
      return({
        ...state,
        userList: payload
      })
    }
  }
}