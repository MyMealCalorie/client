import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

export const S_SelectWrapper = styled(S_FlexBox)`
  justify-content: flex-start;
  height: 20%;
`;
export const S_Select = styled.select`
  font-family: 'dongle';
  font-size: 1.3rem;

  width: 100px;
  height: 30px;
`;
export const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;
export const S_ImgWrapper = styled(S_FlexBox)`
  font-family: 'dongle';
  font-size: 1.5rem;

  width: 100%;
  height: 60%;

  & {
    cursor: pointer;
  }
`;
export const S_Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const S_BlankImg = styled(S_FlexBox)`
  width: 100%;
  height: 100%;

  background: #eee;
`;
export const S_BottomBtns = styled(S_FlexBox)`
  width: 100%;
  height: 20%;
  justify-content: flex-end;
`;
