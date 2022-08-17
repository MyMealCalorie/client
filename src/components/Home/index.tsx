import { useNavigate } from 'react-router-dom';

import {
  S_BackGround,
  S_H1,
  S_P,
  S_BottomBtns,
  S_Btn,
  S_MainWrapper,
} from './style';

interface Props {
  bgImg: string;
  title: string;
  ment: string;
}

const Main = (props: Props) => {
  const navigate = useNavigate();

  const sessionLoggedInfo = JSON.parse(
    sessionStorage.getItem('loggedInfo') as string
  );

  const onClickLogin = () => navigate('/user/login');
  const onClickSignup = () => navigate('/user/signup');

  return (
    <>
      {/* Background Image */}
      <S_BackGround bgImg={props.bgImg} />

      {/* Main */}
      <S_MainWrapper flexDirection="column">
        {/* title */}
        <S_H1>{props.title}</S_H1>

        {/* ment */}
        <S_P>{props.ment}</S_P>

        {/* buttons */}
        {!sessionLoggedInfo ? (
          <S_BottomBtns>
            <S_Btn onClick={onClickLogin}>로그인</S_Btn>
            <S_Btn onClick={onClickSignup}>회원가입</S_Btn>
          </S_BottomBtns>
        ) : (
          <S_BottomBtns>
            <S_Btn onClick={() => navigate('/main')}>메인</S_Btn>
          </S_BottomBtns>
        )}
      </S_MainWrapper>
    </>
  );
};

export default Main;
