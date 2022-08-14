import { useState } from 'react';

// Component
import OneDayList from '../common/OneDayList';

import {
  S_ListContainerWrapper,
  S_DateWrapper,
  S_Total,
  S_CalorieTxt,
} from './style';

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

  const DateParsing = () => {
    const list = date.toString().split(' ');
    // console.log(list);
    return `${list[3]} / ${list[1]} / ${list[2]} ${list[0]}`;
  };

  return (
    <S_ListContainerWrapper>
      <div>
        <S_DateWrapper>
          <span>{DateParsing()}</span>
        </S_DateWrapper>
        <S_Total>
          <span>총 </span>
          <S_CalorieTxt> {totalCalorie}</S_CalorieTxt>
          <span> kcal</span>
        </S_Total>
      </div>
      <OneDayList dataList={oneDayData} />
    </S_ListContainerWrapper>
  );
};

export default OneDayListContainer;
