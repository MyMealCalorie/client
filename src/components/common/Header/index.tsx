import { S_HeaderWrapper, S_MainLogo } from './style';
import Logo from '../../../assets/main_logo.png';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Header = () => {
  const navigate = useNavigate();

  const sessionLoggedInfo = JSON.parse(
    sessionStorage.getItem('loggedInfo') as string
  );

  const onLogout = () => {
    const logout = window.confirm('로그아웃 하시겠습니까?');

    if (logout) {
      sessionStorage.removeItem('loggedInfo');
      alert('로그아웃 되었습니다.');
      window.location.reload();
    }
  };

  return (
    <S_HeaderWrapper>
      <S_MainLogo src={Logo} onClick={() => navigate('/')} /> {/*로고*/}
      {!sessionLoggedInfo ? (
        <></>
      ) : (
        <MdLogout
          size="1.5rem"
          title="로그아웃"
          style={{ cursor: 'pointer' }}
          onClick={onLogout}
        />
      )}
    </S_HeaderWrapper>
  );
};

export default Header;
