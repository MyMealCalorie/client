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
export const S_BtnsWrapper = styled(S_FlexBox)`
  margin-top: 20px;

  button:nth-child(1) {
    margin-right: 10px;
  }
`;
export const S_BottomButton = styled(S_Button)`
  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background-color: #fff;
`;
export const S_Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;
export const S_Label = styled.label`
  color: gray;
  font-size: 0.8rem;
  margin-left: 2px;
`;

/**-------------Title-------------**/
export const S_TitleWrapper = styled(S_FlexBox)`
  width: 100%;
  margin: 30px 0;

  font-weight: 500;
  font-size: 1.2rem;
`;
