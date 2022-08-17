import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { Color } from '../../../utils/color';

export const S_HeaderWrapper = styled(S_FlexBox)`
  position: fixed;
  justify-content: space-between;

  height: 64px;

  top: 0;
  left: 0;
  right: 0;
  padding: 0 50px;
  border-bottom: ${Color.lineBorder};
  z-index: 10;

  background-color: white;
`;

export const S_MainLogo = styled.img`
  width: 90px;
  cursor: pointer;
`;
