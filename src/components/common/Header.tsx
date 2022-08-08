import styled from "styled-components";
import { S_FlexBox } from "../../style/FlexBox.style";

const Header = () => {
  return (
    <S_Wrapper>
      <p>내밥몇칼로리?</p>  {/*로고*/}
      <button>Login</button>  {/*로그인*/}
    </S_Wrapper>
  )
}

export default Header;

const S_Wrapper = styled(S_FlexBox)`
  justify-content: space-between;
  height: 64px;
  padding: 0 50px;
`