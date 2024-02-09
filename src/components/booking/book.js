import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import Constant from '../../util/constant_variables';
import ModalComponent from '../../util/modal';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
dayjs.locale('ko'); // 한국어로 설정
//예약확인 모달창
export default function ModalBookCheck() {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        depTime,
        chooseAirLine,
        depAirPort,
        arrAirPort,
        chooseAirLineNm,
        depAirPortNm,
        arrAirPortNm,
        charge,
        arrTime,
        seatCapacity,
    } = location.state; //다른 컴포넌트로부터 받아들인 데이터 정보

    const [open, setOpen] = useState(false);

    //예약확인 모달창
    const handleOpenClose = () => {
        setOpen(!open);
    }
    //예약 보냄
    const handleSubmit = () => {
        // callPostBookInfoAPI().then((response) => {
        //     console.log("예약 정보 : ", response);
        setOpen(false);
       console.log("예 누름")
        // }).catch(() => {
        //     console.log("무슨이유로 예약정보가 서버로 안감");
        // })
    }
    //취소버튼 
    const handleModalVisible = () => {
        navigate(-1);
    }
    //예약보내는 함수
    async function callPostBookInfoAPI() {
        //백엔드로 보낼 예약데이터
        const formData = {

        }
        try {
            const response = axios.post(Constant.serviceURL + ``, formData, { withCredentials: true })
            return response;
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            {
                open && <ModalComponent handleSubmit={handleSubmit} handleOpenClose={handleOpenClose} message={"예약 하시겠습니까?"} />
            }
            <div>
                <h3>내가 선택한 여정</h3>
                <table>
                    <thead>
                        <tr>
                            <th>항공편</th>
                            <th>출발지</th>
                            <th>도착지</th>
                            <th>좌석수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{chooseAirLineNm} ({chooseAirLine})</td>
                            <td ><p>{depAirPortNm}</p> <span>{dayjs(depTime).format('MM월DD일')}</span>
                                <span className="special-color">{dayjs(depTime).format(' H시mm분')}</span></td>
                            <td ><p>{arrAirPortNm}</p> <span>{dayjs(arrTime).format('MM월DD일')}</span>
                                <span className="special-color">{dayjs(arrTime).format(' H시mm분')}</span></td>
                            <td>{seatCapacity}석</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div >
                <span >총 요금 {charge}원</span>
                <div>
                    <button onClick={handleOpenClose}>예약</button>
                    <button onClick={handleModalVisible} >취소</button>
                </div>
            </div>
        </div>

    )
}