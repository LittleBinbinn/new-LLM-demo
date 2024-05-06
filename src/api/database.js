import request from "../utils/request";

export const uploadFile = (params) => {
    return request({
        method: "POST",
        url: "api/upload",
        data:params,
    })
}

export const deleteFile = (params) => {
    return request({
        method: "POST",
        url: "api/delete",
         data:params,
    })
}

export const getFile = () => {
  
    return request({
        method: "GET",
        url: "api/database?username="+localStorage.getItem("username")
    })
}

export const showFile = (target) => {
      return request({
        method: "GET",
        url: "api/get_content?username="+localStorage.getItem("username")+"&fileName="+target
    })
}


