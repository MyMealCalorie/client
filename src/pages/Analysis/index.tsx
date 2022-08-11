import React, { useState } from 'react';
import {
  S_CalorieDetailWrapper,
  S_DetailWrapper,
  S_ImgWrapper,
  S_InputCalorie,
  S_SendBtn,
} from './style';
import Header from '../../components/common/Header';
import { S_Box } from '../Main/style';
import { S_FlexBox } from '../../style/FlexBox.style';

const Analysis = () => {
  const [imgUrl, setImgUrl] = useState(
    'https://cdn.imweb.me/upload/S20200615b0849c262a5bf/d91910c88d19f.jpg'
  );

  const [calorieData, setCalorieData] = useState([
    { name: '쌀밥', calorie: 300 },
    { name: '오징어국', calorie: 50 },
    { name: '치킨샐러드', calorie: 40 },
    { name: '두부', calorie: 25 },
    { name: '제육볶음', calorie: 180 },
  ]);

  const [totalCalorie, setTotalcalorie] = useState(595); // 각 칼로리의 합으로 계산하기

  const CalorieDetail = () => {
    return (
      <S_CalorieDetailWrapper>
        {calorieData.map(data => {
          return (
            <S_FlexBox justifyContent="space-between" margin="5% 0">
              <p>{data.name}</p>
              <div>
                <S_InputCalorie value={data.calorie} />
                <span>kcal</span>
              </div>
            </S_FlexBox>
          );
        })}
      </S_CalorieDetailWrapper>
    );
  };

  return (
    <div>
      <Header />
      <S_Box>
        <S_ImgWrapper>
          <img src={imgUrl} />
        </S_ImgWrapper>
        <S_FlexBox flexDirection="column" width="300px" height="500px">
          <S_DetailWrapper>
            <p>칼로리 정보</p>
            <CalorieDetail />
            <S_FlexBox justifyContent="space-between" width="70%" height="50px">
              <p>총 칼로리</p>
              <p>{totalCalorie}kcal</p>
            </S_FlexBox>
          </S_DetailWrapper>
          <S_SendBtn>저장하기</S_SendBtn>
        </S_FlexBox>
      </S_Box>
    </div>
  );
};

export default Analysis;
