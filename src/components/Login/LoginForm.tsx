import { useEffect, useRef } from 'react';

import { useInput } from '../../hooks/useInput';

import { S_LoginWrapper, S_Input, S_LogInButton } from './style';

import { useAppSelector, useAppDispath } from '../../store/hooks';
import { logIn, ActionPayolad } from '../../actions/logInAction';

import { regExp } from '../../utils/regExp';
import { useNavigate } from 'react-router-dom';

import { nullCheck } from '../SignUp/SignUpForm';

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

  const status = useAppSelector(({ user }) => user.logIn.data);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  // ref
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // email input focus
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // On successful login
  useEffect(() => {
    if (status) {
      alert('로그인에 성공하였습니다.');

      navigate('/main');
    }
  }, [status]);

  const onClickLogInBtn = () => {
    if (ValidityCheck()) {
      const data = { email, password };

      dispatch(logIn(data as ActionPayolad));
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
    alert(
      '비밀번호는 대문자, 특수문자를 포함한 8자리 이상 16자리 이하여야 합니다.'
    );
    form.password.ref.current!.focus();

    return false;
  }
  return true;
};
