import styled from 'styled-components';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_Button } from '../../style/Button.style';

export const S_ImgWrapper = styled(S_FlexBox)`
  width: 50%;
  border: 1px solid;
  filter: drop-shadow(0 0.3rem 0.4rem rgba(0, 0, 0, 0.5));
  & > img {
    width: 100%;
  }
`;

export const S_DetailWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  padding: 30px 0;
  border: 0.5px rgba(128, 128, 128, 0.39) solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  //box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
  //  rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const S_CalorieDetailWrapper = styled.div`
  width: 70%;
`;

export const S_InputCalorie = styled.input`
  width: 40px;
`;

export const S_SendBtn = styled(S_Button)`
  background-color: #99d156;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  font-size: large;
  width: 90%;
  height: 10%;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
