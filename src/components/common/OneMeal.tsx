import { useState } from 'react';
import { S_FlexBox } from '../../style/FlexBox.style';

// Component
import OneMealDetailModal from './OneMealDetailModal';

import { S_OneMealWrapper, S_Img, S_CalorieTxt } from './style';

interface Props {
  data: {
    time: string;
    imgUrl: string;
    calorie: number;
    detail: {
      name: string;
      calorie: number;
    }[];
  };
}

const OneMeal = ({ data }: Props) => {
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
        data={data}
      />
      <S_OneMealWrapper onClick={onClickShowDetailModal}>
        <S_Img src={data.imgUrl} width="80%" height="60%" />
        <S_FlexBox justifyContent="space-between" width="100px">
          <p>{data.time}</p>
          <S_CalorieTxt>{data.calorie}</S_CalorieTxt>
          <span>kcal</span>
        </S_FlexBox>
      </S_OneMealWrapper>
    </div>
  );
};

export default OneMeal;
