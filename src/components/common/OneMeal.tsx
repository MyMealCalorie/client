import { useState } from 'react';
import styled from 'styled-components';

// Component
import { S_FlexBox } from '../../style/FlexBox.style';
import OneMealDetailModal from './OneMealDetailModal';

interface Props {
  time: string;
  imgUrl: string;
  calorie: number;
}

const OneMeal = ({ time, imgUrl, calorie }: Props) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const onClickCloseModal = () => {
    setShowDetailModal(prev => !prev);
  };

  const onClickShowDetailModal = () => {
    setShowDetailModal(prev => !prev);
  };

  return (
    <div>
      <OneMealDetailModal
        show={showDetailModal}
        onClickCloseModal={onClickCloseModal}
      />
      <S_Wrapper onClick={onClickShowDetailModal}>
        <p>{time}</p>
        <S_Img src={imgUrl} />
        <p>{calorie}kcal</p>
      </S_Wrapper>
    </div>
  );
};

export default OneMeal;

const S_Wrapper = styled(S_FlexBox)`
  border: 1px solid;
  height: 50px;
  margin: 20px 0;
  justify-content: space-evenly;
  cursor: pointer;
`;

const S_Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
`;
