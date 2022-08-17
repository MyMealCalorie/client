import styled from 'styled-components';
import { S_Button } from '../../style/Button.style';
import { Color } from '../../utils/color';
import { S_FlexBox } from '../../style/FlexBox.style';

export const S_Btn = styled(S_Button)`
  color: white;
  font-weight: bold;
  padding: 10px;
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
