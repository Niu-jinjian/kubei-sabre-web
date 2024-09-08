import axios from 'axios'
// import { useUserStore } from '@/stores/index'
import { ElMessage } from 'element-plus'

const baseURL = 'http://k8s.kubei.net:8080'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// instance.interceptors.request.use(
//   (config) => {
//     // TODO 2. 携带token
//     const userStore = useUserStore()
//     if (useUserStore.token) {
//       config.headers.Authorization = userStore.token
//     }
//     return config
//   },
//   (err) => Promise.reject(err)
// )

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.status === 200) {
      return res
    }
    ElMessage({
      showClose: true,
      message: res.message || '服务失异常',
      type: 'error'
    })
    return Promise.reject(res.message)
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
