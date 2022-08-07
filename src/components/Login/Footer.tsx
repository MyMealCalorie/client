import styled from "styled-components";
import { FlexBox } from "../../style/FlexBox.style";
import { Button } from "../../style/Button.style";

import { useNavigate } from "react-router-dom";

const FooterLayout = styled(FlexBox)`
  margin-top: 20px;

  font-size: 0.8rem;

  div {
    margin-right: 8px;
  }

  button {
    font-size: 1rem;
  }
`;
const SignUpButton = styled(Button)`
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