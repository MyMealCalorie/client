import styled from "styled-components";
import { S_FlexBox } from "../../style/FlexBox.style";
import { S_Button } from "../../style/Button.style";

import { useNavigate } from "react-router-dom";

const FooterLayout = styled(S_FlexBox)`
  margin-top: 20px;

  font-size: 0.8rem;

  div {
    margin-right: 8px;
  }

  button {
    font-size: 1rem;
  }
`;
const SignUpButton = styled(S_Button)`
  color: #0000ffc0;
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleSignUpButtonClick = () => {
    navigate('/user/signup');
  };
  return (
    <FooterLayout>
      <div>계정이 없으신가요?</div>

      <SignUpButton onClick={ handleSignUpButtonClick }>
        회원가입
      </SignUpButton>
    </FooterLayout>
  );
}

export default Footer;