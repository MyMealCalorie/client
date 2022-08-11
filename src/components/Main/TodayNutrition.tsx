import { useState } from 'react';

import OneDayList from '../common/OneDayList';
import ImgUploadModal from './ImgUploadModal';

import { S_TodayNutritionWrapper, S_Title, S_UploadBtn } from './style';

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
      imgUrl: 'img',
      calorie: 300,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '저녁',
      imgUrl: 'img',
      calorie: 500,
      detail: [
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
        { name: '', calorie: 0 },
      ],
    },
    {
      time: '기타',
      imgUrl: 'img',
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

      <S_TodayNutritionWrapper>
        {/* Title */}
        <S_Title>Today</S_Title>

        {/* 오늘 식사 리스트*/}
        <OneDayList dataList={todayDayData} />

        {/* 업로드 버튼 */}
        <S_UploadBtn onClick={onClickImgUploadModalBtn}>+</S_UploadBtn>
      </S_TodayNutritionWrapper>
    </>
  );
};

export default TodayNutrition;
