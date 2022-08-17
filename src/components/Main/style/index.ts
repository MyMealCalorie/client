import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';
import { Color } from '../../../utils/color';
import S_CenterBox from '../../../style/CenterBox.style';

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
  font-family: 'dongle';
  font-size: 1.2rem;
  font-weight: 600;

  background-color: #119518;

  padding: 10px 12px;
  border-radius: 5px;
`;
export const S_YellowBtn = styled(S_Btn)`
  font-family: 'dongle';
  font-size: 1.2rem;
  font-weight: 600;

  background-color: ${Color.mainColor};
  color: black;

  padding: 10px 12px;
  border-radius: 5px;

  :hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;

    padding: 5px 10px;
  }
`;
export const S_Title = styled(S_FlexBox)<{ marginBottom?: string }>`
  font-family: 'dongle';
  font-size: 1.5rem;
  letter-spacing: 1px;

  width: 100%;

  margin: 5%;
  margin-bottom: ${props => props.marginBottom};
`;

export const S_ListContainerWrapper = styled(S_FlexBox)`
  width: 30%;
  height: 500px;
  max-width: 300px;

  flex-direction: column;
  justify-content: space-evenly;

  background-color: #fee365;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
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
export const S_SelectWrapper = styled(S_FlexBox)`
  justify-content: flex-start;
  height: 20%;
`;
export const S_Select = styled.select`
  font-family: 'dongle';
  font-size: 1.3rem;

  width: 100px;
  height: 30px;
`;
export const S_ImgWrapper = styled(S_FlexBox)`
  font-family: 'dongle';
  font-size: 1.5rem;

  width: 100%;
  height: 60%;

  & {
    cursor: pointer;
  }
`;
export const S_Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const S_BlankImg = styled(S_FlexBox)`
  width: 100%;
  height: 100%;

  background: #eee;
`;
export const S_BottomBtns = styled(S_FlexBox)`
  width: 100%;
  height: 20%;
  justify-content: flex-end;
`;

/**-------------OneDayListContainer-------------**/
export const S_DateWrapper = styled.div`
  /* font-family: 'dongle';
  font-size: 1.2rem; */

  align-self: flex-start;
  text-align: center;
  padding: 20px;
`;

export const S_Total = styled.div`
  font-family: 'dongle';
  font-size: 1.5rem;

  text-align: center;
`;

export const S_CalorieTxt = styled.span`
  font-size: x-large;
  font-weight: bold;
  color: #2e6410;
`;

/**-------------TodayNutrition-------------**/
export const S_UploadBtn = styled(S_Button)`
  font-size: 1.8rem;
  font-weight: 500;
`;
