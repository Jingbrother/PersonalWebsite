import axios from 'axios'
import { host } from './config'
import { message } from 'antd';
const get = (url:string,query:any) => {
    return axios.get(`${host}${url}`,{
        params:query
    })
    .then((data)=>{
        if(data.data.code!=0){
            message.error(data.data.message)
        }
        return data.data
    })
    .catch((err)=>{
        message.error(err)
    })
}
const post = (url:string,query:any) => {
    return axios.post(`${host}${url}`,query)
    .then((data)=>{
        if(data.data.code!=0){
            message.error(data.data.message)
        }
        return data.data
    })
    .catch((err)=>{
        message.error(err)
    })
}
export default {
    get,
    post
}