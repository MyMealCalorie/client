import { useRef, useEffect } from 'react';

import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import { SignUp, signUp } from '../../actions/signUpAction';
import { useAppSelector, useAppDispath } from '../../store/hooks';

import { regExp } from '../../utils/regExp';

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

  const ValidityCheck = () => {
    // null check
    if (!email) {
      alert('이메일을 입력해주세요.');
      emailRef.current!.focus();

      return;
    } else if (!name) {
      alert('이름을 입력해주세요.');
      nameRef.current!.focus();

      return;
    } else if (!password) {
      alert('비밀번호를 입력해주세요.');
      passwordRef.current!.focus();

      return;
    } else if (!rePassword) {
      alert('비밀번호 확인을 입력해주세요.');
      rePasswordRef.current!.focus();

      return;
    } else if (!name) {
      alert('이름을 입력해주세요.');
      nameRef.current!.focus();

      return;
    }

    // password equal check
    if (password !== rePassword) {
      alert('비밀번호와 비밀번호 확인이 같지 않습니다.');

      passwordRef.current!.focus();
      return;
    }

    // TODO 서버 조건에 맞는 멘트로 변경할 것
    if (!regExp.isEmail(email as string)) {
      alert('이메일 형식을 확인해주세요.');
      return;
    } else if (!regExp.isPassword(password as string)) {
      alert(
        '비밀번호는 대문자, 특수문자를 포함한 8자리 이상 16자리 이하여야 합니다.'
      );
      return;
    }

    return true;
  };

  const onClickLoginBtn = () => {
    navigate('/user/login');
  };
  const onClickSignUpBtn = () => {
    if (ValidityCheck()) {
      dispatch(signUp({ email, name, password }));
    }
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
