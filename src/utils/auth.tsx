import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const auth = (Component: () => JSX.Element) => {
  const LoginCheck = () => {
    const navigate = useNavigate();
    const loginData = useAppSelector(({ user }) => user.logIn.data);

    useEffect(() => {
      if (!loginData) {
        alert('로그인 후 이용해 주세요.');

        navigate('/user/login');
      }
    }, []);

    return <Component />;
  };

  return LoginCheck;
};

export default auth;
