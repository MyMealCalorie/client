import { S_HeaderWrapper, S_MainLogo } from './style';
import Logo from './../../assets/main_logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S_HeaderWrapper>
      <S_MainLogo src={Logo} onClick={() => navigate('/')} /> {/*로고*/}
      <button>Login</button> {/*로그인*/}
    </S_HeaderWrapper>
  );
};

export default Header;
