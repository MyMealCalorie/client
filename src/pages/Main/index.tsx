import React, { useState } from 'react';

// Style
import { S_BottomTitle, S_Box, S_MainLayout } from './style';

// Component
import Chart from '../../components/Main/Chart';
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
          <Chart />

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
