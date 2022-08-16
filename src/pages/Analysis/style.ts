import styled from 'styled-components';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_Button } from '../../style/Button.style';
import { Color } from '../../utils/color';

export const S_CheckInform = styled.div`
<<<<<<< HEAD
  position: relative;
  top: -10px;
=======
  font-family: 'dongle';
  font-size: 1.3rem;

  position: absolute;
  top: 65px;
  right: 5%;
>>>>>>> c93a4fb4ddeb285428d974bbf25b935c0e3801c5

  padding: 10px;
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
    right: 50%;
  }
`;

export const S_ImgWrapper = styled(S_FlexBox)`
  flex-direction: column;
  width: 50%;
  filter: drop-shadow(0 0.3rem 0.4rem rgba(0, 0, 0, 0.5));
  & > img {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const S_Time = styled.div`
  align-self: flex-start;
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
  width: 70%;
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
