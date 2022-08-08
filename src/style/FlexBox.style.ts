import styled from "styled-components";

interface FlexBoxProps {
  background?: string;

  width?: string;
  height?: string;

  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const S_FlexBox = styled.div<FlexBoxProps>`
  width: ${ props => props.width };
  height: ${ props => props.height };

  display: flex;
  flex-direction: ${ props => props.flexDirection || 'row'};
  justify-content: ${ props => props.justifyContent || 'center' };
  align-items: ${ props => props.alignItems || 'center'};

  background: ${ props => props.background || 'none' }; 
`;