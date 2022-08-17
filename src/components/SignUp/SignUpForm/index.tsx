import React, { useRef, useEffect } from 'react';

import { useInput } from '../../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import { signUp, ActionPayolad } from '../../../_actions/signUpAction';
import { useAppDispath } from '../../../_store/hooks';

import { regExp } from '../../../utils/regExp';

import {
  S_BottomBtnsWrapper,
  S_SignUpBtn,
  S_BackLogInBtn,
  S_SignUpFormWrapper,
  S_Input,
  S_Label,
} from './style';

// Types
interface Inputs {
  value: string | React.Dispatch<React.SetStateAction<string>>;
  alert: string;
  ref: React.RefObject<HTMLInputElement>;
}

// Component
const SignUpForm = () => {
  // hooks
  const dispatch = useAppDispath();
  const navigate = useNavigate();

  const [email, onChangeEmail] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [rePassword, onChangeRePassword] = useInput('');

  // useEffects
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Ref
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  const ValidityCheck = () => {
    const checkCategory = [
      { value: email, alert: '이메일을 입력해주세요.', ref: emailRef },
      { value: name, alert: '이름을 입력해주세요.', ref: nameRef },
      { value: password, alert: '비밀번호를 입력해주세요.', ref: passwordRef },
      {
        value: rePassword,
        alert: '비밀번호 확인을 입력해주세요.',
        ref: rePasswordRef,
      },
    ];

    // null check
    if (!nullCheck(checkCategory)) return;

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
        '비밀번호는 문자, 숫자, 특수문자를 포함한 8자리 이상 16자리 이하여야 합니다.'
      );
      return;
    }

    return true;
  };

  const succeedInSignUp = () => {
    alert('회원가입에 성공하였습니다. 로그인 해주세요.');
    navigate('/user/login');
  };

  const onClickLoginBtn = () => {
    navigate('/user/login');
  };

  const onClickSignUpBtn = () => {
    if (ValidityCheck()) {
      dispatch(signUp({ email, name, password } as ActionPayolad))
        .unwrap()
        .then(res => res.success && succeedInSignUp())
        .catch(err => alert('회원가입에 실패하였습니다. 다시 시도해 주세요.'));
    }
  };

  const inputs = [
    {
      name: 'Email',
      inputValue: email,
      onChange: onChangeEmail,
      placeholder: '이메일',
      type: 'email',
      ref: emailRef,
    },
    {
      name: 'Name',
      inputValue: name,
      onChange: onChangeName,
      placeholder: '이름',
      type: 'text',
      ref: nameRef,
    },
    {
      name: 'Password',
      inputValue: password,
      onChange: onChangePassword,
      placeholder: '비밀번호',
      type: 'password',
      ref: passwordRef,
    },
    {
      name: 'Repassword',
      inputValue: rePassword,
      onChange: onChangeRePassword,
      placeholder: '비밀번호 확인',
      type: 'password',
      ref: rePasswordRef,
    },
  ];
  return (
    <S_SignUpFormWrapper>
      {/* Inputs: email, name, password, rePassword */}
      {inputs.map(input => (
        <React.Fragment key={input.name}>
          <S_Label htmlFor={input.name}>{input.name}</S_Label>
          <S_Input
            value={input.inputValue}
            onChange={input.onChange}
            placeholder={input.placeholder}
            name={input.name}
            type={input.type}
            ref={input.ref}
          />
        </React.Fragment>
      ))}

      {/* Login, Signup 버튼 */}
      <S_BottomBtnsWrapper>
        <S_BackLogInBtn onClick={onClickLoginBtn}>
          로그인으로 돌아가기
        </S_BackLogInBtn>
        <S_SignUpBtn onClick={onClickSignUpBtn}>회원가입</S_SignUpBtn>
      </S_BottomBtnsWrapper>
    </S_SignUpFormWrapper>
  );
};

export default SignUpForm;

// TODO 공통 사용 분리 요망
export const nullCheck = (checkCategory: Inputs[]) => {
  for (let i = 0; i < checkCategory.length; i++) {
    if (!checkCategory[i].value) {
      alert(checkCategory[i].alert);
      checkCategory[i].ref.current!.focus();

      return false;
    }
  }
  return true;
};
