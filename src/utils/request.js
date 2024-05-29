import axios from "axios";

//创建aixos实例
const request = axios.create({
    //定义公共接口
    baseURL: "http://120.46.76.5:80",
    
    timeout: 60 * 1000

    
})

//请求拦截器,设置token，配置请求头
request.interceptors.request.use((config) => {
    config.data = JSON.stringify(config.data);
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.token = token
    }
    return config
})


//响应拦截器
request.interceptors.response.use((res) => {
    const status = res.data.code || 200
    const message = rea.data.message || "未知错误"
    if (status == 333) {
        //路由跳转
    }
    if (status == 304) {
        alert("请您先登录！")
    }
    if (status != 200) {
        alert(status+message)
    }
    return res.data
},
    (err) => {
    return Promise.reject(err);
})





//导出
export default request;