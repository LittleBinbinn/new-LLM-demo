import request from "@/utils/request";

export const postEnroll = (params) => {
    return request({
        url: "api/enroll", 
        method: "post",
        data:params,
    })
}


export const postLogin = (params) => {
    return request({
        url: "api/login",
        method: "post",
        data: params,
    })
}



