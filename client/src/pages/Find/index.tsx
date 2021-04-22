import React, { useState } from 'react'
import { Modal, InputNumber, Tooltip, Button } from 'antd'
import { connect } from "react-redux";
import s from './index.m.scss'
import { setStore } from "../../store/action";
import ReactClock from '@uiw/react-clock';
import codeList from '../../users/code'
import { host } from '../../utils/config'
import { BugOutlined } from '@ant-design/icons';
interface IFindProps {
    numberValueOne: any;
    numberValueTwo: any;
    numberValueThree: any;
}
const Find: React.FC<IFindProps> = ({ numberValueOne, numberValueTwo, numberValueThree }) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true)
    const [isCode, setIsCode] = useState<boolean>(false)
    const codeValidation = () => {
        codeList.forEach(item => {
            if (item.one === numberValueOne && item.two === numberValueTwo && item.three === numberValueThree) {
                setIsCode(true)
            }
        });
        setIsModalVisible(false)
    }
    return (
        <div>
            {isCode ?
                <div className={s.code}>
                    <div className={s.line}></div>
                    <Button type="primary" shape="circle" icon={<BugOutlined />} />
                </div> : ''
            }

            <Modal visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onOk={codeValidation}>
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
        const { numberValueOne, numberValueTwo, numberValueThree } = state;
        return {
            numberValueOne,
            numberValueTwo,
            numberValueThree
        };
    }
)(Find);