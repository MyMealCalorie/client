import styled from 'styled-components';
import { S_Button } from '../../../style/Button.style';

interface InputProps {
  value: any;
  onChange: any;
}

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

  &:focus {
    outline: 1px solid #ffe365;
  }
`;
export const S_LogInButton = styled(S_Button)`
  width: 100%;
  padding: 13px 12px;

  font-size: 1rem;
  font-weight: 550;

  color: #464646;

  border: 1px solid #dedede;
  border-radius: 4px;

  background: #ffe365;
`;
export const S_Boundary = styled.span`
  display: flex;
  align-items: center;
  /* flex-basis: 100%; */

  color: #1f202146;
  font-size: 12px;
  margin: 16px 0;

  ::before,
  ::after {
    content: '';
    flex-grow: 1;
    background: #1f202146;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
`;
