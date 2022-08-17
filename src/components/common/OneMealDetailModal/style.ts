import styled from 'styled-components';
import { S_Button } from '../../../style/Button.style';
import { S_FlexBox } from '../../../style/FlexBox.style';

export const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;
export const S_TimeWrapper = styled.div`
  font-family: 'dongle';

  align-self: flex-start;
  margin: 0 5% 5%;

  & > p {
    font-size: 2rem;
  }
`;
export const S_ContentWrapper = styled(S_FlexBox)`
  font-family: 'dongle';

  flex-direction: column;
  justify-content: flex-start;

  height: 80%;
`;
export const S_Content = styled(S_FlexBox)`
  font-size: 1.5rem;
  width: 100%;

  /* height: 20%; */ // 스크롤 생김

  flex-direction: column;

  margin: 5% 0;
  & > p {
    font-weight: bold;
    font-size: large;
  }
`;
export const S_DetailMap = styled(S_FlexBox)`
  width: 96%;
  height: 86%;

  flex-wrap: wrap;
  // overflow-y: scroll;  - height 지정해야 함
  overflow-y: scroll;
  padding: 5px;
  & > p {
    margin: 2%;
  }
`;
