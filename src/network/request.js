import axios from 'axios'

//1.回调
export function request(config) {
  //直接返回Promise对象
  //1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000'
    baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 5000
  })
  //2.1.axios的请求拦截器
  instance.interceptors.request.use(config =>{
    //转化config中不符合服务器要求的信息
    //显示正在请求的动画
    //登录必须携带特殊的信息:token
    return config
  }, err => {
    console.log(err);
  })
  //2.2.axios的响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })
  //3.返回真正的网络请求
  return instance(config)
}
