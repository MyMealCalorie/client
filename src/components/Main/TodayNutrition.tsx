import { useState } from 'react';

import OneDayList from '../common/OneDayList';
import ImgUploadModal from './ImgUploadModal';

import { S_Title, S_UploadBtn, S_ListContainerWrapper } from './style';

const TodayNutrition = () => {
  const [todayDayData, setTodayDayData] = useState([
    // key값 변경
    // data 항목 더 추가될 예정
    {
      time: '아침',
      imgUrl:
        'https://cdn.imweb.me/upload/S20200615b0849c262a5bf/d91910c88d19f.jpg',
      calorie: 400,
      detail: [
        { name: '밥', calorie: 300 },
        { name: '국', calorie: 250 },
        { name: '김치', calorie: 150 },
      ],
    },
    {
      time: '점심',
      imgUrl:
        'https://정식.com/data/file/after/thumb-3534924931_jeLaNKbq_9718a8b7a12f360d87ed4504216d70850e0675ce_600x800.jpg',
      calorie: 300,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '저녁',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthL2iBcyf4JEHk8XyBvaeVXg-nAXPIc_Tbg&usqp=CAU',
      calorie: 500,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '기타',
      imgUrl:
        'https://img.insight.co.kr/static/2016/06/09/700/x5slp0e41x7w3q72hdcw.jpg',
      calorie: 600,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '기타',
      imgUrl:
        'https://recipe1.ezmember.co.kr/cache/recipe/2020/10/08/0de8df51d4a5c33f1a7e6f397042ca791.png',
      calorie: 600,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '기타',
      imgUrl:
        'https://shop.peopet.co.kr/data/goods/185/2022/01/_temp_16432988645321view.jpg',
      calorie: 600,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
  ]);
  const [modal, setModal] = useState(false);

  const onClickImgUploadModalBtn = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && <ImgUploadModal modalHandler={onClickImgUploadModalBtn} />}

      <S_ListContainerWrapper>
        {/* Title */}
        <S_Title>Today</S_Title>

        {/* 오늘 식사 리스트*/}
        <OneDayList dataList={todayDayData} />

        {/* 업로드 버튼 */}
        <S_UploadBtn onClick={onClickImgUploadModalBtn}>+</S_UploadBtn>
      </S_ListContainerWrapper>
    </>
  );
};

export default TodayNutrition;
