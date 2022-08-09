import styled from 'styled-components';

// Component
import S_CenterBox from '../../style/CenterBox.style';
import { S_Button } from '../../style/Button.style';
import { S_FlexBox } from '../../style/FlexBox.style';

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
      <S_Wrapper>
        <S_CloseBtn onClick={onClickCloseModal}>&times;</S_CloseBtn>
        <S_TimeWrapper>
          <p>{data.time}</p>
        </S_TimeWrapper>
        <S_ContentWrapper>
          <S_Img src={data.imgUrl} />
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
      </S_Wrapper>
    </S_CenterBox>
  );
};
export default OneMealDetailModal;

const S_Wrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

const S_CloseBtn = styled(S_Button)`
  align-self: flex-end;
`;

const S_TimeWrapper = styled.div`
  align-self: flex-start;
  margin: 5% 10%;
`;

const S_ContentWrapper = styled(S_FlexBox)`
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
`;

const S_Img = styled.img`
  width: 70%;
`;

const S_Content = styled(S_FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 5% 0;
  & > p {
    margin: 2% 0;
    font-weight: bold;
  }
`;

const S_DetailMap = styled(S_FlexBox)`
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
