import React, { Component } from "react";
import Jeju from '../styles/image/main_pic.jpg'; //감귤 이미지
import Busan from '../styles/image/busan.jpg'; //부산 이미지
import Daejeon from '../styles/image/busan.jpg'; //부산 이미지
import Gwangju from '../styles/image/busan.jpg'; //부산 이미지
export default class Constant {
    static serviceURL = "http://localhost:8088"; //서비스 주소

    static getEmailMenus() { //회원가입에 사용할 이메일
        return [
            { key: 0, value: "naver.com" },
            { key: 1, value: "gmail.com" },
            { key: 2, value: "nate.com" },
            { key: 3, value: "hanmail.com" },
            { key: 4, value: "aol.com" },
            { key: 5, value: "yahoo.com" },
        ];
    }
    static getSeatLevel() { //좌석등급
        return [
            { key: 0, value: "일반석", name: "일반석" },
            { key: 1, value: "프리스티지석", name: "프리스티지석" },

        ];
    }

    static getSliderMenus() {
        return [
            { key: 0, value: "제주", title: "이번 겨울", subTitle: "제주 여행을 감행하다 ", content: "사방으로 펼쳐진 바다, 산과 들, 하늘까지 푸르름으로 가득찬 성 '제주'", imageUrl: Jeju },
            { key: 1, value: "광주", title: "이번 겨울", subTitle: "광주 여행을 감행하다 ", content: "내일이 빛나는 기회의 도시 빛고을 '광주'", imageUrl: Gwangju },
            { key: 2, value: "부산", title: "이번 겨울", subTitle: "부산 여행을 감행하다 ", content: "다시 태어나도 살고 싶은 그린 스마트 도시 '부산'", imageUrl: Busan },
            { key: 3, value: "대전", title: "이번 겨울", subTitle: "대전 여행을 감행하다 ", content: "대한민국의 중심축 성심당의 도시 '대전'", imageUrl: Daejeon },
        ];
    }

}