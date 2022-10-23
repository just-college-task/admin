import request from '@/utils/request'

export function reqUserInfo(data) {
  return request({
    url: '/auth/info',
    method: 'get',
    data
  })
}

export function getUsers() {
  return request({
    url: '/api/admin/user',
    method: 'get'
  })
}

export function deleteUser(data) {
  return request({
    url: `/api/admin/user?id=${data.userId}`,
    method: 'delete'
  })
}

export function editUser(data) {
  return request({
    url: '/api/admin/user',
    method: 'put',
    data
  })
}

export function reqValidatUserID(data) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/auth/signup',
    method: 'post',
    data
  })
}