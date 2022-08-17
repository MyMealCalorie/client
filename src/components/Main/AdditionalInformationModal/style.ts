import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Btn } from '../common.style';

interface InputProps {
  value: any;
  onChange: any;
}

export const S_AdditionalInformationModalWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: space-evenly;

  width: 80%;
  height: 80%;
`;
export const S_Label = styled.label`
  width: 20%;
  color: gray;
  font-size: 0.8rem;
`;
export const S_InputWrapper = styled(S_FlexBox)`
  width: 100%;
  height: auto;

  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const S_Input = styled.input<InputProps>`
  width: 30%;
  height: auto;

  padding: 13px 12px;
  margin-right: 2px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;
export const S_Gender = styled.div`
  width: 20%;
  color: gray;
  font-size: 0.8rem;
  margin-left: 2px;
`;

export const S_RadioForm = styled.form`
  width: 80%;

  display: flex;

  div {
    margin-right: 10px;
  }
  label {
    padding-left: 5px;
  }
`;
export const S_Unit = styled(S_FlexBox)`
  align-items: flex-end; // 왜 안먹지..
  height: auto;
`;
export const S_RedBtn = styled(S_Btn)`
  font-family: 'dongle';
  font-size: 1.2rem;
  font-weight: 600;

  background-color: #119518;

  padding: 10px 12px;
  border-radius: 5px;
`;
