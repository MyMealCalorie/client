import { S_HeaderWrapper, S_MainLogo } from './style';
import Logo from './../../assets/main_logo.png';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Header = () => {
  const navigate = useNavigate();

  const sessionLoggedInfo = JSON.parse(
    sessionStorage.getItem('loggedInfo') as string
  );

  return (
    <S_HeaderWrapper>
      <S_MainLogo src={Logo} onClick={() => navigate('/')} /> {/*로고*/}
      {!sessionLoggedInfo ? (
        <></>
      ) : (
        <MdLogout size="1.5rem" style={{ cursor: 'pointer' }} />
      )}
    </S_HeaderWrapper>
  );
};

export default Header;
