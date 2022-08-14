import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------types-------------**/
interface InputProps {
  value: any;
  onChange: any;
}

/**-------------SignUpForm-------------**/
export const S_SignUpFormWrapper = styled.div`
  height: auto;
`;
export const S_BottomBtnsWrapper = styled(S_FlexBox)`
  justify-content: space-between;

  margin-top: 20px;

  button:nth-child(1) {
    margin-right: 10px;
  }
`;
export const S_BackLogInBtn = styled(S_Button)`
  color: #5cc2fb;
`;
export const S_SignUpBtn = styled(S_Button)`
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  color: #464646;
  background-color: #ffe365;
`;
export const S_Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  &:focus {
    outline: 1px solid #ffe365;
  }
`;
export const S_Label = styled.label`
  color: #464646;
  font-size: 0.8rem;
  margin-left: 2px;
`;

/**-------------Title-------------**/
export const S_TitleWrapper = styled(S_FlexBox)`
  width: 100%;
  margin: 30px 0;

  font-weight: 500;
  font-size: 1.2rem;

  color: #464646;
`;
