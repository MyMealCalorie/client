import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------types-------------**/
interface square {
  width?: string;
  height?: string;
}

/**-------------Header-------------**/
export const S_HeaderWrapper = styled(S_FlexBox)`
  position: fixed;
  justify-content: space-between;

  height: 64px;

  top: 0;
  left: 0;
  right: 0;
  padding: 0 50px;
  border-bottom: 0.5px solid;
  z-index: 10;

  background-color: white;
`;

/**-------------OneDayList-------------**/
export const S_OneDayListtWrapper = styled(S_FlexBox)`
  width: 90%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

/**-------------OneMeal-------------**/
export const S_OneMealWrapper = styled(S_FlexBox)`
  height: 100px;
  flex-direction: column;
  justify-content: space-evenly;

  margin: 5% 0;
  padding: 5px;
  border: 1px solid white;
  border-radius: 10px;

  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
`;
export const S_Img = styled.img<square>`
  width: ${props => props.width};
  height: ${props => props.height};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  object-fit: contain;

  :hover {
    transform: scale(1.5);
    transition: transform 0.35s;
    z-index: 2;
  }
`;

export const S_CalorieTxt = styled.span`
  font-weight: bold;
`;

/**-------------OneMealDetailModal-------------**/
export const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;
export const S_TimeWrapper = styled.div`
  align-self: flex-start;
  margin: 0 5% 5%;
  & > p {
    font-size: large;
    font-weight: bold;
  }
`;
export const S_ContentWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  height: 80%;
`;
export const S_Content = styled(S_FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 20%;
  margin: 5% 0;
  & > p {
    font-weight: bold;
    font-size: large;
  }
`;
export const S_DetailMap = styled(S_FlexBox)`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  // overflow-y: scroll;  - height 지정해야 함
  overflow-y: scroll;
  padding: 5px;
  & > p {
    margin: 2%;
  }
`;
