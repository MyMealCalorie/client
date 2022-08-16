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
  font-size: 5rem;
  font-family: 'dongle';

  margin-bottom: 40px;
`;
export const S_P = styled.p`
<<<<<<< HEAD
  font-size: 1.8rem;
  text-align: center;
=======
  font-size: 2.5rem;
  font-family: 'dongle';

>>>>>>> c93a4fb4ddeb285428d974bbf25b935c0e3801c5
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
  font-family: 'dongle';
  font-size: 1.5rem;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 16px;
  box-sizing: border-box;

  cursor: pointer;
  color: white;
  display: inline-block;
  padding: 13px 16px;

  letter-spacing: 0.8px;
  line-height: 20px;
  text-align: center;

  transition-duration: 0.3s;

  :hover {
    background-color: white;
    color: #b69a32;
  }
`;
