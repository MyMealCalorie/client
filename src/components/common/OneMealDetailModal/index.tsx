// Component
import S_CenterBox from '../../../style/CenterBox.style';
import { S_FlexBox } from '../../../style/FlexBox.style';

import {
  S_CloseBtn,
  S_TimeWrapper,
  S_ContentWrapper,
  S_Content,
  S_DetailMap,
} from './style';
import { S_Img } from '../common.style';

import { AiOutlineClose } from 'react-icons/ai';

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
      outerBackgroundColor="rgba(238,238,238,0.8)"
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    >
      <S_FlexBox
        flexDirection="column"
        justifyContent="flex-start"
        width="90%"
        height="90%"
      >
        <S_CloseBtn onClick={onClickCloseModal}>
          <AiOutlineClose />
        </S_CloseBtn>
        <S_TimeWrapper>
          <p>{data.time}</p>
        </S_TimeWrapper>
        <S_ContentWrapper>
          <S_Img src={data.imgUrl} width="80%" height="50%" />
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
      </S_FlexBox>
    </S_CenterBox>
  );
};
export default OneMealDetailModal;
