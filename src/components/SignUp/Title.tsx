import styled from "styled-components";
import { S_FlexBox } from "../../style/FlexBox.style";

const Title = () => {
  return (
    <S_TitleLayout>
      회원가입
    </S_TitleLayout>
  );
}

export default Title;

const S_TitleLayout = styled(S_FlexBox)`
  width: 100%;
  margin: 30px 0;

  font-weight: 500;
  font-size: 1.2rem;
`;
