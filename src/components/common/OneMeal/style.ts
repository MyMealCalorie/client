import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';

export const S_OneMealWrapper = styled(S_FlexBox)<{ onClick: () => void }>`
  font-family: 'dongle';

  height: 100px;
  flex-direction: column;
  justify-content: space-evenly;

  margin: 5% 0;
  padding: 5px;

  border: 1px solid white;
  border-radius: 10px;

  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
`;

export const S_CalorieTxt = styled.span`
  font-size: 1.2rem;
`;
