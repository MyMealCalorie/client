import React, { useRef, useEffect } from 'react';

import { useInput } from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

import { signUp, ActionPayolad } from '../../actions/signUpAction';
import { useAppSelector, useAppDispath } from '../../store/hooks';

import { regExp } from '../../utils/regExp';

import {
  S_BtnsWrapper,
  S_BottomButton,
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

  // Selector
  const status = useAppSelector(({ user }) => user.signUp.status);

  // useEffects
  useEffect(() => {
    if (status) successSignUp();
  }, [status]);
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Ref
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  const successSignUp = () => {
    alert('회원가입에 성공하였습니다. 로그인 해주세요.');
    navigate('/user/login');
  };

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
      dispatch(signUp({ email, name, password } as ActionPayolad));
    }
  };

  const inputs = [
    {
      name: 'email',
      inputValue: email,
      onChange: onChangeEmail,
      placeholder: '이메일',
      type: 'email',
      ref: emailRef,
    },
    {
      name: 'name',
      inputValue: name,
      onChange: onChangeName,
      placeholder: '이름',
      type: 'text',
      ref: nameRef,
    },
    {
      name: 'password',
      inputValue: password,
      onChange: onChangePassword,
      placeholder: '비밀번호',
      type: 'password',
      ref: passwordRef,
    },
    {
      name: 'repassword',
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
      <S_BtnsWrapper>
        <S_BottomButton onClick={onClickLoginBtn}>LOGIN</S_BottomButton>
        <S_BottomButton onClick={onClickSignUpBtn}>SIGNUP</S_BottomButton>
      </S_BtnsWrapper>
    </S_SignUpFormWrapper>
  );
};

export default SignUpForm;

const nullCheck = (checkCategory: Inputs[]) => {
  for (let i = 0; i < checkCategory.length; i++) {
    if (!checkCategory[i].value) {
      alert(checkCategory[i].alert);
      checkCategory[i].ref.current!.focus();

      return false;
    }
  }
  return true;
};
