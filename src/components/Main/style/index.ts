import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------types-------------**/
interface InputProps {
  value: any;
  onChange: any;
}
/**-------------Common-------------**/
export const S_Btn = styled(S_Button)`
  color: white;
  font-weight: bold;
  padding: 10px;
`;
export const S_RedBtn = styled(S_Btn)`
  background-color: red;
  margin-right: 5px;
`;
export const S_BlueBtn = styled(S_Btn)`
  background-color: blue;
`;
export const S_Title = styled(S_FlexBox)<{ marginBottom?: string }>`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;

  margin-bottom: ${props => props.marginBottom};
`;

/**-------------AdditionalInformationModal-------------**/
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

/**-------------ImgUploadModal-------------**/
export const S_ImgUploadModalWrapper = styled(S_FlexBox)`
  width: 90%;
  height: 90%;

  flex-direction: column;
  align-items: flex-start;
`;
export const S_SelectWrapper = styled(S_FlexBox)`
  justify-content: flex-start;
  height: 20%;
`;
export const S_Select = styled.select`
  width: 100px;
  height: 30px;
`;
export const S_ImgWrapper = styled(S_FlexBox)`
  width: 100%;
  height: 60%;

  & {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    width: 100%;
    height: 200px;
  }
`;
export const S_Img = styled.img`
  width: 200px;
  max-height: 100%;
`;
export const S_BlankImg = styled.div`
  width: 200px;
  height: 200px;
`;
export const S_BottomBtns = styled(S_FlexBox)`
  width: 100%;
  height: 20%;
  justify-content: flex-end;
`;

/**-------------OneDayListContainer-------------**/
export const S_OneDayListContainerWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid;
  width: 300px;
  height: 450px;
`;

export const S_DateWrapper = styled.div`
  align-self: flex-start;
  padding: 0 20px;
`;

export const S_Total = styled.p`
  font-weight: bold;
`;

/**-------------TodayNutrition-------------**/

export const S_TodayNutritionWrapper = styled(S_FlexBox)`
  width: 30%;
  height: 450px;
  max-width: 300px;

  flex-direction: column;
  justify-content: space-evenly;

  border: 1px solid;
`;
export const S_UploadBtn = styled(S_Button)`
  font-size: 1.8rem;
  font-weight: 500;
`;
