/**
 * 基于axios 封装的模块
 */
import axios from 'axios'
const fetch = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器

// 响应拦截器
export default fetch
