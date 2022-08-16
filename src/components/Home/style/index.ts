import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------Main-------------**/
export const S_BackGround = styled.div<{ bgImg: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => props.bgImg});
  background-position: center;
  background-size: cover;

  filter: blur(2px);
  -webkit-filter: blur(2px);

  width: 100%;
  height: 100vh;
`;
export const S_MainWrapper = styled(S_FlexBox)`
  position: absolute;

  color: #fff;
`;
export const S_H1 = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 40px;
`;
export const S_P = styled.p`
  font-size: 1.8rem;
  padding: 30px;
  margin-bottom: 40px;
`;
export const S_BottomBtns = styled(S_FlexBox)`
  button:first-child {
    margin-right: 20px;
  }
`;
export const S_Btn = styled(S_Button)`
  width: 100px;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 16px;
  box-sizing: border-box;

  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 13px 16px;

  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  text-align: center;

  transition-duration: 0.3s;

  :hover {
    background-color: white;
    color: #b69a32;
  }
`;
