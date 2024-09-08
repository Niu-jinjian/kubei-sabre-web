import request from '@/utils/request'

// 获取图形验证码接口
export const captchaImage = () => {
  return request.get('/api/base/captcha')
}

// 注册接口
export const userRegisterService = ({
  username,
  password,
  roleId,
  captchaId,
  captcha
}) => {
  return request.post('/api/base/regist', {
    username,
    password,
    roleId,
    captchaId,
    captcha
  })
}

// 登录接口
export const userLoginService = ({ username, password, captchaCode }) => {
  return request.post('/api/base/login', { username, password, captchaCode })
}
