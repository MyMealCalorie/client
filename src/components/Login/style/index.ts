import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------types-------------**/
interface InputProps {
  value: any;
  onChange: any;
}

/**-------------Footer-------------**/
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
  color: #0000ffc0;
`;

/**-------------LoginForm-------------**/
export const S_LoginWrapper = styled.div`
  width: 90%;
  height: auto;
`;
export const S_Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;
export const S_LogInButton = styled(S_Button)`
  width: 100%;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background: #fff;
`;

/**-------------LoginForm-------------**/
export const LogoWrapper = styled.div`
  margin-bottom: 40px;
`;
