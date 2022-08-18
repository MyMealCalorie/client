import React, { useState } from 'react';
import { S_Box } from '../Main/style';
import { S_FlexBox } from '../../style/FlexBox.style';

import Header from '../../components/common/Header';
import Auth from '../../utils/auth';
import AnalyzedImg from '../../components/Analysis/AnalyzedImg';
import DetailSheet from '../../components/Analysis/DetailSheet';

const Analysis = () => {
  // 객체 좌표값 더미 데이터
  const [data, setData] = useState([
    { name: '흰쌀밥', calorie: 310, x: 302, y: 54, w: 67, h: 70 },
    { name: '된장국', calorie: 50, x: 408, y: 31, w: 90, h: 90 },
    { name: '깍두기', calorie: 16, x: 150, y: 166, w: 65, h: 65 },
    { name: '고사리나물', calorie: 50, x: 260, y: 171, w: 53, h: 74 },
    { name: '두부', calorie: 42, x: 350, y: 182, w: 50, h: 57 },
    { name: '김치', calorie: 10, x: 453, y: 187, w: 50, h: 50 },
    { name: '흰쌀밥', calorie: 310, x: 298, y: 315, w: 70, h: 65 },
    { name: '된장국', calorie: 50, x: 169, y: 301, w: 100, h: 90 },
  ]);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Contents*/}
      <S_FlexBox margin="64px 0 0 0">
        <S_Box>
          {/*이미지*/}
          <AnalyzedImg coords={data} />

          {/* 칼로리 영수증 */}
          <DetailSheet calorieData={data} />
        </S_Box>
      </S_FlexBox>
    </div>
  );
};

export default Auth(Analysis);
