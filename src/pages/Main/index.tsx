import React from "react";
import styled from "styled-components";

// Component
import {S_FlexBox} from "../../style/FlexBox.style";
import Chart from "../../components/Main/Chart";
import Today from "../../components/Main/Today";
import Calendar from "../../components/Main/Calendar";
import OneDayList from "../../components/Main/OneDayList";
import Header from "../../components/common/Header";
import { S_Footer } from "../../style/Footer.style";

const Main = () => {
  return (
    <div>
      <Header />
      <S_MainLayout>
        <S_Box>
          {/* chart */}
          <Chart />

          {/* today's data */}
          <Today />
        </S_Box>

        <S_BottomTitle>하단 컨테이너 제목</S_BottomTitle>

        <S_Box>
          {/* calendar */}
          <Calendar />

          {/* selected date's data */}
          <OneDayList />
        </S_Box>
      </S_MainLayout>
      <S_Footer />
    </div>
  )
}

export default Main;

const S_MainLayout = styled(S_FlexBox)`
  flex-direction: column;
  margin: 5%;
`

const S_Box = styled(S_FlexBox)`
  width: 100%;
  justify-content: space-evenly;
  margin: 2% 0;
  padding: 3%;
`

const S_BottomTitle = styled.p`
  font-size: large;
  margin-top: 3%;
  text-align: center;
  width: 100%;
  border-top: 1px solid;  // 임시
`