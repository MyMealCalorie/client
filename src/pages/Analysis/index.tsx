import React from 'react';
import { S_CheckInform } from './style';
import { S_Box } from '../Main/style';
import { S_FlexBox } from '../../style/FlexBox.style';

import Header from '../../components/common/Header';
import Auth from '../../utils/auth';
import AnalyzedImg from '../../components/Analysis/AnalyzedImg';
import DetailSheet from '../../components/Analysis/DetailSheet';

const Analysis = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* 말풍선 */}
      <S_CheckInform>
        <span>칼로리 정보를 확인하고 수정해주세요!</span>
      </S_CheckInform>

      {/* Main Contents*/}
      <S_FlexBox>
        <S_Box>
          {/*이미지*/}
          <AnalyzedImg />

          {/* 칼로리 영수증 */}
          <DetailSheet />
        </S_Box>
      </S_FlexBox>
    </div>
  );
};

export default Auth(Analysis);
