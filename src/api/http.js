import axios from 'axios'
import Vue from 'vue'
var BaseUrl = '' // 请求的地址因为我是用node代理测试环境已经配好了
if (process.env.NODE_ENV === 'development') {
  // 开发用的
  BaseUrl = 'http://183.129.230.130:6010'
} else if (process.env.NODE_ENV === 'debug') {
// 调试用的
  BaseUrl = 'http://183.129.230.130:6010'
} else if (process.env.NODE_ENV === 'production') {
// 线上环境
  BaseUrl = 'http://183.129.230.130:6010'
}
function requestFN (o) {
  // 基础请求方法
  // o.type //请求类型
  // o.url //请求路径
  var obj = {
    method: o.type, // 请求的类型
    url: BaseUrl + o.url // 请求地址
  }
  if (o.hasOwnProperty('params')) {
    obj.params = o.params // url后面带参数 如 https://echarts.baidu.com/examples/a?test="1"
  } else if (o.hasOwnProperty('data')) {
    obj.data = o.data // data 带参数
  }
  // 返回axios的基础方法
  return axios(obj).then(r => {
    return r.data // 方法请求的数据
  })
}
async function getFN (o) {
  // get方法
  var result = await requestFN(o)
  return result
}
const install = () => {
  Vue.prototype.$getFN = getFN // GET方法
}
axios.defaults.timeout = 10000
export default install
