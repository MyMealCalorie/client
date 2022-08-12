import Header from '../../components/common/Header';

import styled from 'styled-components';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_Button } from '../../style/Button.style';

const Home = () => {
  return (
    <S_FlexBox flexDirection="column">
      <Header />

      <S_BG>
        <S_Section>
          <S_H1>내 밥 몇 칼로리?</S_H1>
          <S_P>
            사진 한 장으로 손쉽게 나의 섭취 칼로리를 계산하고, 관리해 보세요!
          </S_P>
          <S_BottomBtns>
            <S_Btn>로그인</S_Btn>
            <S_Btn>로그아웃</S_Btn>
          </S_BottomBtns>
        </S_Section>
      </S_BG>
    </S_FlexBox>
  );
};

export default Home;

const S_BG = styled(S_FlexBox)`
  width: 100%;
  background-image: url('carrots.jpg');
`;
const S_Section = styled.section`
  width: 90%;
  height: 600px;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const S_H1 = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 40px;
`;
const S_P = styled.p`
  font-size: 1.5rem;
  padding: 30px;
  margin-bottom: 40px;
`;
const S_BottomBtns = styled(S_FlexBox)`
  button:first-child {
    margin-right: 20px;
  }
`;
export const S_Btn = styled(S_Button)`
  width: 100px;
  padding: 13px 20px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background-color: #fff;
`;
