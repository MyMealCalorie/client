import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = (Component: () => JSX.Element) => {
  const LoginCheck = () => {
    const navigate = useNavigate();

    const sessionLoggedInfo = JSON.parse(
      sessionStorage.getItem('loggedInfo') as string
    );

    useEffect(() => {
      if (!sessionLoggedInfo) {
        alert('로그인 후 이용해 주세요.');

        navigate('/user/login');
      }
    }, []);

    return <Component />;
  };

  return LoginCheck;
};

export default auth;
