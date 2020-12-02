/**
 * 基于axios 封装的模块
 */
import axios from 'axios'
export const fetch = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
export default ({store}) => {
//   console.log(context)
  // 请求拦截器
// Add a request interceptor
// 任何请求都要经过请求拦截器
// 我们可以在请求拦截器中做一些公共的业务处理, 例如统一处理设置 token
fetch.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 请求会经过这里
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    return Promise.reject(error);
  });
  // 响应拦截器
}

