import request from '@/utils/request'

export const sendChat = (params) => {
    return request({
        method: "POST",
        url: "api/index",
        data: params
    })
}


