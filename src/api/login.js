import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}

// 第三方授权页面
export function PreLoginByGitee() {
  return request({
    url: '/PreLoginByGitee',
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

// 第三方登录
export function loginByGitee(code, uuid) {
  const data = {
    code,
    source: 'Gitee',
    uuid
  }
  return request({
    url: '/loginByGitee',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}
