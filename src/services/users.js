import request  from '@/utils/request';

async function getUserList(params){
  const res = await request('/api/users', {
    method: 'GET',
    // data: params
  })
  return res
}

const API = {
  queryUserList: params => getUserList(params)
}

export default API
