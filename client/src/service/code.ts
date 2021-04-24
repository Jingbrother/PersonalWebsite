import request from '../utils/request'
import { setStore } from "../store/action";
export const getCode = (query:any)=>{
    return request.post('code/contrast',query)
    .then((data)=>{
        setStore({
            isCode:data.data
        })
    })
}