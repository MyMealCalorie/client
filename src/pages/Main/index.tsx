import React, { useState } from 'react';
import styled from 'styled-components';

// Component
import { S_FlexBox } from '../../style/FlexBox.style';
import WeeklyCalorieChart from '../../components/Main/WeeklyCalorieChart';
import TodayNutrition from '../../components/Main/TodayNutrition';
import CalendarContainer from '../../components/Main/CalendarContainer';
import OneDayListContainer from '../../components/Main/OneDayListContainer';
import Header from '../../components/common/Header';
import { S_Footer } from '../../style/Footer.style';

const Main = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Header />
      <S_MainLayout>
        <S_Box>
          {/* chart */}
          <WeeklyCalorieChart />

          {/* today's data */}
          <TodayNutrition />
        </S_Box>

        <S_BottomTitle>하단 컨테이너 제목</S_BottomTitle>

        <S_Box>
          {/* calendar */}
          <CalendarContainer date={date} setDate={setDate} />

          {/* selected date's data */}
          <OneDayListContainer date={date} />
        </S_Box>
      </S_MainLayout>
      <S_Footer />
    </div>
  );
};

export default Main;

const S_MainLayout = styled(S_FlexBox)`
  flex-direction: column;
  margin: 5%;
`;

const S_Box = styled(S_FlexBox)`
  width: 90%;
  justify-content: space-evenly;
  margin: 5% 0;
`;

const S_BottomTitle = styled.p`
  font-size: large;
  margin-top: 3%;
  text-align: center;
  width: 100%;
  border-top: 1px solid; // 임시
`;
