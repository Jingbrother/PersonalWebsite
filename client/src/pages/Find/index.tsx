import React, { useState } from 'react'
import { Modal, InputNumber, Tooltip, Button } from 'antd'
import { connect } from "react-redux";
import s from './index.m.scss'
import { setStore } from "../../store/action";
import ReactClock from '@uiw/react-clock';
import { host } from '../../utils/config'
import { BugOutlined } from '@ant-design/icons';
import {getCode} from '../../service/code'
interface IFindProps {
    numberValueOne: any;
    numberValueTwo: any;
    numberValueThree: any;
    isCode:boolean;
}
const Find: React.FC<IFindProps> = ({ numberValueOne, numberValueTwo, numberValueThree ,isCode}) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true)
    const [isCodeLoading,setIsCodeLoading] = useState<boolean>(false)
    const codeValidation = () => {
        if(typeof numberValueOne==='number' && typeof numberValueTwo==='number' && typeof numberValueThree==='number' ){
            setIsCodeLoading(true)
            getCode({
                best:numberValueOne,
                ten:numberValueTwo,
                a:numberValueThree
            })
            .then(()=>{
                setIsCodeLoading(false)
                setIsModalVisible(false)
            })
        }else{
            setIsModalVisible(false)
        }
    }
    return (
        <div>
            {isCode ?
                <div className={s.code}>
                    <div className={s.line}></div>
                    <Button type="primary" shape="circle" icon={<BugOutlined />} />
                </div> : ''
            }

            <Modal 
                visible={isModalVisible} 
                onCancel={() => setIsModalVisible(false)} 
                footer={[
                    <Button key="back" onClick={() => setIsModalVisible(false)}>
                      取消
                    </Button>,
                    <Button key="submit" type="primary" loading={isCodeLoading} onClick={codeValidation}>
                      确定
                    </Button>
                  ]}
            >
                <div>
                    <div>程序员小哥哥正在加速建设中，敬请期待！！！</div>
                    <div style={{ marginTop: 15 }}>
                        <InputNumber size="small" style={{ width: 60 }} value={numberValueOne} onChange={(value) => setStore({ numberValueOne: value })} /><span style={{ marginLeft: 5, marginRight: 5 }}>-</span>
                        <InputNumber size="small" style={{ width: 60 }} value={numberValueTwo} onChange={(value) => setStore({ numberValueTwo: value })} /><span style={{ marginLeft: 5, marginRight: 5 }}>-</span>
                        <InputNumber size="small" style={{ width: 60 }} value={numberValueThree} onChange={(value) => setStore({ numberValueThree: value })} />
                        <Tooltip placement="right" title='隐藏入口暗号，如想获得隐藏入口暗号，请联系网站管理员！！！'>
                            <BugOutlined style={{ marginLeft: 5, color: 'red' }} />
                        </Tooltip>
                    </div>
                </div>
            </Modal>
            <div className={s['reactClock']}>
                <ReactClock />
            </div>
            <div className={s['img']}>
                <img src={`${host}images/404.png`} width='100%' height='100%' />
            </div>
        </div>
    )
}
export default connect(
    (state) => {
        const { numberValueOne, numberValueTwo, numberValueThree,isCode } = state;
        return {
            numberValueOne,
            numberValueTwo,
            numberValueThree,
            isCode
        };
    }
)(Find);