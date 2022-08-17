import styled from 'styled-components';
import { Color } from '../../../utils/color';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

export const S_CheckInform = styled.div`
  font-family: 'dongle';
  font-size: 1.3rem;

  position: relative;
  top: -10px;
  right: -20%;

  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
  background: ${Color.mainColor};
  font-style: italic;

  :after {
    border-top: 10px solid ${Color.mainColor};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    bottom: -10px;
    right: 70%;
  }
`;

export const S_DetailWrapper = styled(S_FlexBox)`
  font-family: 'dongle';
  font-size: 1.3rem;

  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 80%;

  padding: 30px 0;

  border: 0.5px rgba(128, 128, 128, 0.39) solid;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  & > p {
    font-size: 1.5rem;
    font-weight: 550;
  }
`;

export const S_CalorieDetailWrapper = styled.div`
  width: 85%;
  padding: 5%;
  margin-left: 5%;
  overflow-y: scroll;
`;

export const S_InputName = styled.input`
  width: 70px;
`;

export const S_InputCalorie = styled.input`
  width: 40px;
  text-align: right;
`;

export const S_SendBtn = styled(S_Button)`
  font-family: 'dongle';
  font-size: 1.5rem;
  font-weight: 600;

  width: 90%;
  height: 10%;

  background-color: ${Color.mainColor};
  color: black;

  margin-top: 20px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :hover {
    opacity: 0.9;
  }
`;
