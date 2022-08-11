import { useEffect, useRef } from 'react';

import { useInput } from '../../hooks/useInput';

import { S_LoginWrapper, S_Input, S_LogInButton } from './style';

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

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
      />

      {/* Login button */}
      <S_LogInButton>로그인</S_LogInButton>
    </S_LoginWrapper>
  );
};

export default LoginForm;
