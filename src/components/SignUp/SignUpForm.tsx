import { useRef, useEffect } from "react";
import styled from "styled-components";

import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

import { S_Button } from "../../style/Button.style";
import { S_FlexBox } from "../../style/FlexBox.style";

interface InputProps {
  value: any;
  onChange: any;
}

const SignUpForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [rePassword, onChangeRePassword] = useInput('');

  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => { emailRef.current?.focus() }, []);

  const onClickLoginBtn = () => {
    navigate('/user/login');
  }
  return (
   <S_SignUpLayout>

      {/* Input: email, password, rePassword */}
      <S_Label htmlFor="login-email">email</S_Label>
      <S_Input 
        value={ email }
        onChange = { onChangeEmail }
        placeholder='이메일'
        name='login-email'
        type='email' 
        ref = { emailRef } />

      <S_Label style={{color: 'gray', fontSize: '0.8rem', marginLeft: '2px'}} htmlFor="ogin-email">password</S_Label>
      <S_Input 
        value={ password }
        onChange = { onChangePassword }
        placeholder='비밀번호'
        name='signup-password'
        type='password' />

      <S_Label style={{color: 'gray', fontSize: '0.8rem', marginLeft: '2px'}} htmlFor="login-email">password check</S_Label>
      <S_Input 
        value={ rePassword }
        onChange = { onChangeRePassword }
        placeholder='비밀번호 확인'
        name='signup-password-check'
        type='password' />

      {/* Login, Signup 버튼 */}
      <S_BtnsWrapper>
        <S_BottomButton onClick={ onClickLoginBtn }>
            LOGIN
        </S_BottomButton>
        <S_BottomButton>
          SIGNUP
        </S_BottomButton>
      </S_BtnsWrapper>
      
   </S_SignUpLayout>
  );
}

export default SignUpForm;

const S_BtnsWrapper = styled(S_FlexBox)`
  margin-top: 20px;
  
  button:nth-child(1) {
    margin-right: 10px;
  } 
`;
const S_BottomButton = styled(S_Button)`
  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background-color: #fff;
`;

const S_SignUpLayout = styled.div`
  height: auto;
`;

const S_Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;
const S_Label = styled.label`
  color: gray;
  font-size: 0.8rem;
  margin-left: 2px;
`;