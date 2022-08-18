import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';

export const S_ImgWrapper = styled(S_FlexBox)`
  flex-direction: column;
  width: 50%;
  filter: drop-shadow(0 0.3rem 0.4rem rgba(0, 0, 0, 0.5));
  & > canvas {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
