import { S_HeaderWrapper, S_MainLogo } from './style';
import Logo from './../../assets/main_logo.png';

const Header = () => {
  return (
    <S_HeaderWrapper>
      <S_MainLogo src={Logo} /> {/*로고*/}
      <button>Login</button> {/*로그인*/}
    </S_HeaderWrapper>
  );
};

export default Header;
