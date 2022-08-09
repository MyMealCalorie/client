import { useState } from 'react';
import styled from 'styled-components';

// Component
import { S_FlexBox } from '../../style/FlexBox.style';
import OneMeal from '../common/OneMeal';
import OneDayList from '../common/OneDayList';

const OneDayListContainer = () => {
  const [date, setDate] = useState('2022/08/08'); // date 어떤 타입으로?

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

  return (
    <S_Wrapper>
      <S_DateWrapper>
        <span>{date}</span>
      </S_DateWrapper>
      <S_Total>총 {totalCalorie}kcal</S_Total>
      <OneDayList dataList={oneDayData} />
    </S_Wrapper>
  );
};

export default OneDayListContainer;

const S_Wrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid;
  width: 300px;
  height: 450px;
`;

const S_DateWrapper = styled.div`
  align-self: flex-start;
  padding: 0 20px;
`;

const S_Total = styled.p`
  font-weight: bold;
`;
