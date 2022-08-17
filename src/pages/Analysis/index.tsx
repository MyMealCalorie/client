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
    { name: '흰쌀밥', calorie: 310, x: 240, y: 45, w: 50, h: 50 },
    { name: '된장국', calorie: 50, x: 327, y: 19, w: 80, h: 80 },
    { name: '깍두기', calorie: 16, x: 114, y: 135, w: 60, h: 60 },
    { name: '고사리나물', calorie: 50, x: 205, y: 135, w: 50, h: 65 },
    { name: '두부', calorie: 42, x: 278, y: 141, w: 50, h: 50 },
    { name: '김치', calorie: 10, x: 360, y: 150, w: 43, h: 40 },
    { name: '흰쌀밥', calorie: 310, x: 242, y: 253, w: 45, h: 45 },
    { name: '된장국', calorie: 50, x: 133, y: 242, w: 70, h: 73 },
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
