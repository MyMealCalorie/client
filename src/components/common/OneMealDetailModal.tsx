// Component
import S_CenterBox from '../../style/CenterBox.style';

import {
  S_OneMealDetailModalWrapper,
  S_CloseBtn,
  S_TimeWrapper,
  S_ContentWrapper,
  S_Img,
  S_Content,
  S_DetailMap,
} from './style';

interface Props {
  show: boolean;
  onClickCloseModal: () => void;
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

const OneMealDetailModal = ({ show, onClickCloseModal, data }: Props) => {
  if (!show) return null;

  return (
    <S_CenterBox
      width="500px"
      height="500px"
      innerBackgroundColor="white"
      outerBackgroundColor="rgba(238,238,238,0.8)" // 변경 가능
    >
      <S_OneMealDetailModalWrapper>
        <S_CloseBtn onClick={onClickCloseModal}>&times;</S_CloseBtn>
        <S_TimeWrapper>
          <p>{data.time}</p>
        </S_TimeWrapper>
        <S_ContentWrapper>
          <S_Img src={data.imgUrl} width="70%" height="50%" />
          <S_Content>
            <p>총 {data.calorie}kcal</p>
            <S_DetailMap>
              {data.detail.map(food => {
                return (
                  <p>
                    {food.name}: {food.calorie}kcal
                  </p>
                );
              })}
            </S_DetailMap>
          </S_Content>
        </S_ContentWrapper>
      </S_OneMealDetailModalWrapper>
    </S_CenterBox>
  );
};
export default OneMealDetailModal;
