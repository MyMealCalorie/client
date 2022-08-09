import { useState } from 'react';
import styled from 'styled-components';

// Component
import { S_FlexBox } from '../../style/FlexBox.style';
import OneMeal from '../common/OneMeal';

const OneDayList = () => {
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
    },
    { time: '점심', imgUrl: 'img', calorie: 300 },
    { time: '저녁', imgUrl: 'img', calorie: 500 },
    { time: '기타', imgUrl: 'img', calorie: 600 },
  ]);

  return (
    <S_Wrapper>
      <S_DateWrapper>
        <span>{date}</span>
      </S_DateWrapper>
      <S_Total>총 {totalCalorie}kcal</S_Total>
      <S_Content>
        {oneDayData.map(data => {
          // key prop 필요
          return <OneMeal data={data} />;
        })}
      </S_Content>
    </S_Wrapper>
  );
};

export default OneDayList;

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

const S_Content = styled.div`
  width: 90%;
`;
