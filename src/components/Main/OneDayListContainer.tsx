import { useState } from 'react';

// Component
import OneDayList from '../common/OneDayList';

import { S_OneDayListContainerWrapper, S_DateWrapper, S_Total } from './style';

interface Props {
  date: Date;
}

const OneDayListContainer = ({ date }: Props) => {
  const [totalCalorie, setTotalCalorie] = useState(2000);

  const [oneDayData, setOneDayData] = useState([
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

  const DateParsing = () => {
    const list = date.toString().split(' ');
    // console.log(list);
    return `${list[3]} / ${list[1]} / ${list[2]} ${list[0]}`;
  };

  return (
    <S_OneDayListContainerWrapper>
      <S_DateWrapper>
        <span>{DateParsing()}</span>
      </S_DateWrapper>
      <S_Total>총 {totalCalorie}kcal</S_Total>
      <OneDayList dataList={oneDayData} />
    </S_OneDayListContainerWrapper>
  );
};

export default OneDayListContainer;
