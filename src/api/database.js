import request from "../utils/request";


export const uploadFile = (params) => {
    return request({
        method: "POST",
        url: "api/upload",
        data:params,
    })
}



export const getFile = () => {
    return request({
        method: "GET",
        url: "api/upload",
    })
}