import { useNavigate } from 'react-router-dom';

import { S_FooterWrapper, S_SignUpButton } from './style';

const Footer = () => {
  const navigate = useNavigate();

  const handleSignUpButtonClick = () => {
    navigate('/user/signup');
  };
  return (
    <S_FooterWrapper>
      <div>계정이 없으신가요?</div>

      <S_SignUpButton onClick={handleSignUpButtonClick}>
        회원가입
      </S_SignUpButton>
    </S_FooterWrapper>
  );
};

export default Footer;
