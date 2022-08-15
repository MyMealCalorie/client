import React, { useState } from 'react';

// Component
import WeeklyCalorieChart from '../../components/Main/WeeklyCalorieChart';
import TodayNutrition from '../../components/Main/TodayNutrition';
import CalendarContainer from '../../components/Main/CalendarContainer';
import OneDayListContainer from '../../components/Main/OneDayListContainer';
import Header from '../../components/common/Header';
import { S_Footer } from '../../style/Footer.style';
import { S_BottomTitle, S_Box } from './style';
import { S_FlexBox } from '../../style/FlexBox.style';

// HOC
import Auth from '../../utils/auth';

const Main = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Header />
      <S_FlexBox flexDirection="column" margin="64px 0 0 0">
        <S_Box>
          {/* chart */}
          <WeeklyCalorieChart />

          {/* today's data */}
          <TodayNutrition />
        </S_Box>

        <S_BottomTitle />

        <S_Box>
          {/* calendar */}
          <CalendarContainer date={date} setDate={setDate} />

          {/* selected date's data */}
          <OneDayListContainer date={date} />
        </S_Box>
      </S_FlexBox>
      <S_Footer />
    </div>
  );
};

export default Auth(Main);
