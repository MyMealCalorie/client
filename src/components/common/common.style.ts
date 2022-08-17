import styled from 'styled-components';

interface square {
  width?: string;
  height?: string;
}

export const S_Img = styled.img<square>`
  width: ${props => props.width};
  height: ${props => props.height};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  object-fit: contain;

  :hover {
    transform: scale(1.5);
    transition: transform 0.35s;
    z-index: 2;
  }
`;
