import axios from "axios";


const request = axios.create({
    // baseURL: "http://120.46.76.5:80",
    // baseURL:"api",
    timeout:600000
})




export default request;