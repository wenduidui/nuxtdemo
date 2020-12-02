import { fetch } from '@/plugins/request'
// 用户登录
export const login = (data) => {
  return fetch({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}
// 用户注册
export const register = params => {
  return fetch({
    method: 'POST',
    url: '/api/users',
    params
  })
}
// 修改用户信息
export const updateUserInfo = (data) => {
  return fetch({
    method: 'PUT',
    url: '/api/user',
    data
  })
}

// 获取用户详情
export const userInfo = username => {
  return fetch({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}

// 关注用户
export const followUser = username => {
  return fetch({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取消关注
export const unFollowUser = username => {
  return fetch({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}