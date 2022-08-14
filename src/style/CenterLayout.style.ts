import styled from 'styled-components';

interface CenterLayoutProps {
  background?: string;
}

export const S_CenterLayout = styled.div<CenterLayoutProps>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ background }) => background || 'none'};
`;
