import { useEffect, useRef } from 'react';

import { useInput } from '../../hooks/useInput';

import { S_LoginWrapper, S_Input, S_LogInButton, S_Boundary } from './style';
import { S_Button } from '../../style/Button.style';

import { useAppDispath } from '../../_store/hooks';
import { logIn, ActionPayolad } from '../../_actions/logInAction';

import { regExp } from '../../utils/regExp';
import { useNavigate } from 'react-router-dom';

import { nullCheck } from '../SignUp/SignUpForm';

import kakao from '../../assets/kakao_login.png';

// Types
interface Input {
  value: string;
  ref: React.RefObject<HTMLInputElement>;
}
interface form {
  email: Input;
  password: Input;
}

// Component
const LoginForm = () => {
  // hooks
  const dispatch = useAppDispath();
  const navigate = useNavigate();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  // ref
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // email input focus
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const succeedInLogIn = (userData: {}) => {
    // TODO 세션 저장 정보 추후 변경 가능
    window.sessionStorage.setItem('loggedInfo', JSON.stringify(userData));

    alert('로그인에 성공했습니다.');

    navigate('/main');
  };

  const onClickLogInBtn = () => {
    if (ValidityCheck()) {
      const data = { email, password };

      // 로그인 성공시 유저 정보 세션에 저장해야함
      dispatch(logIn(data as ActionPayolad))
        .unwrap()
        .then(res => res.success && succeedInLogIn(res))
        .catch(err => alert('로그인에 실패했습니다. 다시 시도해 주세요.'));
    }
  };

  // 유효성 검사
  const ValidityCheck = () => {
    const checkCategory = [
      { value: email, alert: '이메일을 입력해주세요.', ref: emailRef },
      { value: password, alert: '비밀번호를 입력해주세요.', ref: passwordRef },
    ];
    const form = {
      email: { value: email, ref: emailRef },
      password: { value: password, ref: passwordRef },
    };

    // Null Check
    if (!nullCheck(checkCategory)) return false;

    // Format Check
    if (!userFormatCheck(form as form)) return false;

    return true;
  };

  return (
    <S_LoginWrapper>
      {/* Input: email, password  */}
      <S_Input
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일"
        name="login-email"
        type="email"
        ref={emailRef}
      />
      <S_Input
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호"
        name="login-password"
        type="password"
        ref={passwordRef}
      />

      {/* Login button */}
      <S_LogInButton onClick={onClickLogInBtn}>로그인</S_LogInButton>

      {/* 구분선  */}
      <S_Boundary>또는</S_Boundary>

      <S_Button>
        <img src={kakao} />
      </S_Button>
    </S_LoginWrapper>
  );
};

export default LoginForm;

// TODO SignUp에서도 적용 가능
const userFormatCheck = (form: form) => {
  if (!regExp.isEmail(form.email.value as string)) {
    alert('이메일 형식을 확인해주세요.');
    form.email.ref.current!.focus();

    return false;
  } else if (!regExp.isPassword(form.password.value as string)) {
    alert('비밀번호가 틀렸습니다.');
    form.password.ref.current!.focus();

    return false;
  }
  return true;
};
