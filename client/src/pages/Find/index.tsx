import React,{useEffect} from 'react'
import url from '../img/404.png'
import { Modal } from 'antd'
import s from './index.m.scss'
import ReactClock from '@uiw/react-clock';
import { BugOutlined } from '@ant-design/icons';
interface IFindProps{}
const Find : React.FC<IFindProps> = () =>{
    useEffect(()=>{
        Modal.success({
            icon:<BugOutlined />,
            content: (
                <div>程序员小哥哥正在加速建设中，敬请期待！！！</div>
            ),
        });
    },[])
    return (
        <div>
            <div className={s['reactClock']}>
                <ReactClock/>
            </div>
            <div className={s['img']}>
                <img src={url} width='100%' height='100%'/>
            </div>
        </div>
    )
}
export default Find