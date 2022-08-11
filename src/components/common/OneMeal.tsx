import { useState } from 'react';

// Component
import OneMealDetailModal from './OneMealDetailModal';

import { S_OneMealWrapper, S_Img } from './style';

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
        <p>{data.time}</p>
        <S_Img src={data.imgUrl} width="40px" height="40px" />
        <p>{data.calorie}kcal</p>
      </S_OneMealWrapper>
    </div>
  );
};

export default OneMeal;
