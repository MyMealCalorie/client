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
  justify-content: space-between;
  height: 64px;
  padding: 0 50px;
`;

/**-------------OneDayList-------------**/
export const S_OneDayListtWrapper = styled.div`
  width: 90%;
`;

/**-------------OneMeal-------------**/
export const S_OneMealWrapper = styled(S_FlexBox)`
  border: 1px solid;
  height: 50px;
  margin: 20px 0;
  justify-content: space-evenly;
  cursor: pointer;
`;
export const S_Img = styled.img<square>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin-right: 30px;
`;

/**-------------OneMealDetailModal-------------**/
export const S_OneMealDetailModalWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid;
  width: 100%;
  height: 100%;
`;
export const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;
export const S_TimeWrapper = styled.div`
  align-self: flex-start;
  margin: 5% 10%;
`;
export const S_ContentWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
`;
export const S_Content = styled(S_FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 5% 0;
  & > p {
    margin: 2% 0;
    font-weight: bold;
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
