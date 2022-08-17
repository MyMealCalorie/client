import {
  S_CalorieDetailWrapper,
  S_CheckInform,
  S_DetailWrapper,
  S_InputCalorie,
  S_SendBtn,
} from './style';
import { S_FlexBox } from '../../../style/FlexBox.style';
import React, { useState } from 'react';

interface Props {
  calorieData: {
    name: string;
    calorie: number;
    x: number;
    y: number;
    w: number;
    h: number;
  }[];
}

const DetailSheet = ({ calorieData }: Props) => {
  const [time, setTime] = useState('아침');

  const [totalCalorie, setTotalcalorie] = useState(595); // TODO 각 칼로리의 합으로 계산하기

  // 칼로리 정보
  const CalorieDetail = () => {
    return (
      <S_CalorieDetailWrapper>
        {calorieData.map(data => {
          return (
            <S_FlexBox justifyContent="space-between" margin="5% 0">
              <p>{data.name}</p>
              <div>
                <S_InputCalorie value={data.calorie} />
                <span> kcal</span>
              </div>
            </S_FlexBox>
          );
        })}
      </S_CalorieDetailWrapper>
    );
  };

  return (
    <S_FlexBox flexDirection="column" width="300px" height="500px">
      {/* 알림 말풍선 */}
      <S_CheckInform>
        <span>칼로리 정보를 확인하고 수정해주세요!</span>
      </S_CheckInform>

      {/* 디테일 */}
      <S_DetailWrapper>
        <p>{`오늘의 ${time}`}</p>

        {/* 칼로리 디테일 */}
        <CalorieDetail />

        <S_FlexBox justifyContent="space-between" width="70%" height="50px">
          <p>총 칼로리</p>
          <p>{totalCalorie} kcal</p>
        </S_FlexBox>
      </S_DetailWrapper>

      <S_SendBtn>저장하기</S_SendBtn>
    </S_FlexBox>
  );
};

export default DetailSheet;
