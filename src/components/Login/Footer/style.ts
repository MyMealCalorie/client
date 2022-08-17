import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

export const S_FooterWrapper = styled(S_FlexBox)`
  margin-top: 20px;

  font-size: 0.8rem;

  div {
    margin-right: 8px;
  }

  button {
    font-size: 1rem;
  }
`;
export const S_SignUpButton = styled(S_Button)`
  color: #5cc2fb;
`;
