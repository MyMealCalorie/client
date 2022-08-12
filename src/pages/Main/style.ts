import styled from 'styled-components';
import { S_FlexBox } from '../../style/FlexBox.style';

export const S_Box = styled(S_FlexBox)`
  width: 90%;
  justify-content: space-evenly;
  margin: 5% 0;
`;

export const S_BottomTitle = styled.p`
  width: 90%;

  font-size: large;
  text-align: center;

  margin-top: 3%;
  border-top: 1px solid; // 임시
`;
