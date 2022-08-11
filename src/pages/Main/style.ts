import styled from 'styled-components';
import { S_FlexBox } from '../../style/FlexBox.style';

export const S_MainLayout = styled(S_FlexBox)`
  flex-direction: column;
  margin: 5%;
`;

export const S_Box = styled(S_FlexBox)`
  width: 100%;
  justify-content: space-evenly;
  margin: 2% 0;
  padding: 3%;
`;

export const S_BottomTitle = styled.p`
  font-size: large;
  margin-top: 3%;
  text-align: center;
  width: 100%;
  border-top: 1px solid; // 임시
`;
