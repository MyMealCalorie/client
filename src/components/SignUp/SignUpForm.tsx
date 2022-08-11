import { useRef, useEffect } from 'react';

import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import {
  S_BtnsWrapper,
  S_BottomButton,
  S_SignUpFormWrapper,
  S_Input,
  S_Label,
} from './style';

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [rePassword, onChangeRePassword] = useInput('');

  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const onClickLoginBtn = () => {
    navigate('/user/login');
  };
  return (
    <S_SignUpFormWrapper>
      {/* Input: email, password, rePassword */}
      <S_Label htmlFor="login-email">email</S_Label>
      <S_Input
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일"
        name="login-email"
        type="email"
        ref={emailRef}
      />

      <S_Label
        style={{ color: 'gray', fontSize: '0.8rem', marginLeft: '2px' }}
        htmlFor="ogin-email"
      >
        password
      </S_Label>
      <S_Input
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호"
        name="signup-password"
        type="password"
      />

      <S_Label
        style={{ color: 'gray', fontSize: '0.8rem', marginLeft: '2px' }}
        htmlFor="login-email"
      >
        password check
      </S_Label>
      <S_Input
        value={rePassword}
        onChange={onChangeRePassword}
        placeholder="비밀번호 확인"
        name="signup-password-check"
        type="password"
      />

      {/* Login, Signup 버튼 */}
      <S_BtnsWrapper>
        <S_BottomButton onClick={onClickLoginBtn}>LOGIN</S_BottomButton>
        <S_BottomButton>SIGNUP</S_BottomButton>
      </S_BtnsWrapper>
    </S_SignUpFormWrapper>
  );
};

export default SignUpForm;
