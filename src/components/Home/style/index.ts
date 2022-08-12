import styled from 'styled-components';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Button } from '../../../style/Button.style';

/**-------------Main-------------**/
export const S_Section = styled.section<{ bgImg: string }>`
  background-image: url(${props => props.bgImg});

  width: 100%;
  height: 600px;

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const S_H1 = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 40px;
`;
export const S_P = styled.p`
  font-size: 1.5rem;
  padding: 30px;
  margin-bottom: 40px;
`;
export const S_BottomBtns = styled(S_FlexBox)`
  button:first-child {
    margin-right: 20px;
  }
`;
export const S_Btn = styled(S_Button)`
  width: 100px;
  padding: 13px 20px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background-color: #fff;
`;
