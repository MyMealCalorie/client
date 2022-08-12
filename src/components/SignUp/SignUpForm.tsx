import { useRef, useEffect } from 'react';

import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import { SignUp, signUp } from '../../actions/signUpAction';
import { useAppSelector, useAppDispath } from '../../store/hooks';

import {
  S_BtnsWrapper,
  S_BottomButton,
  S_SignUpFormWrapper,
  S_Input,
  S_Label,
} from './style';

const SignUpForm = () => {
  const dispatch = useAppDispath();
  const navigate = useNavigate();

  const status = useAppSelector(({ user }) => user.signUp.data);

  useEffect(() => {
    if (status) successSignUp();
  }, [status]);

  const successSignUp = () => {
    alert(status.message);
    navigate('/user/login');
  };

  const [email, onChangeEmail] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [rePassword, onChangeRePassword] = useInput('');

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const onClickLoginBtn = () => {
    navigate('/user/login');
  };
  const onClickSignUpBtn = () => {
    dispatch(signUp({ email, name, password }));
  };
  return (
    <S_SignUpFormWrapper>
      {/* Input: email, password, rePassword */}
      <S_Label htmlFor="email">email</S_Label>
      <S_Input
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일"
        name="email"
        type="email"
        ref={emailRef}
      />

      <S_Label htmlFor="name">name</S_Label>
      <S_Input
        value={name}
        onChange={onChangeName}
        placeholder="이름"
        name="name"
        type="text"
        ref={nameRef}
      />

      {/* TODO 인라인 스타일 */}
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
        ref={passwordRef}
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
        ref={rePasswordRef}
      />

      {/* Login, Signup 버튼 */}
      <S_BtnsWrapper>
        <S_BottomButton onClick={onClickLoginBtn}>LOGIN</S_BottomButton>
        <S_BottomButton onClick={onClickSignUpBtn}>SIGNUP</S_BottomButton>
      </S_BtnsWrapper>
    </S_SignUpFormWrapper>
  );
};

export default SignUpForm;
