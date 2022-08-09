import styled from "styled-components";

// Component
import { S_FlexBox } from "../../style/FlexBox.style";

interface Props {
  time: string,
  imgUrl: string,
  calorie: number
}

const OneMeal = ({time, imgUrl, calorie}: Props) => {
  return (
    <S_Wrapper>
      <p>{time}</p>
      <S_Img src={imgUrl} />
      <p>{calorie}kcal</p>
    </S_Wrapper>
  )
};

export default OneMeal;

const S_Wrapper = styled(S_FlexBox)`
  border: 1px solid;
  height: 50px;
  margin: 20px 0;
  justify-content: space-evenly;
`;

const S_Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
`;