import request from "@/utils/request";

export const temp = () => {
    return request({
        method: "get",
        url:"/mock/api/user"
    })
}
