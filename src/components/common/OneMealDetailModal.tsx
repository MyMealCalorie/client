import styled from 'styled-components';

// Component
import S_CenterBox from '../../style/CenterBox.style';
import { S_Button } from '../../style/Button.style';
import { S_FlexBox } from '../../style/FlexBox.style';

interface Props {
  show: boolean;
  onClickCloseModal: () => void;
}

const OneMealDetailModal = ({ show, onClickCloseModal }: Props) => {
  if (!show) return null;

  return (
    <S_CenterBox
      width="300px"
      height="300px"
      innerBackgroundColor="white"
      outerBackgroundColor="rgba(238,238,238,0.8)" // 변경 가능
    >
      <S_Wrapper>
        <S_CloseBtn onClick={onClickCloseModal}>&times;</S_CloseBtn>
      </S_Wrapper>
    </S_CenterBox>
  );
};
export default OneMealDetailModal;

const S_Wrapper = styled(S_FlexBox)`
  flex-direction: column;
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;
