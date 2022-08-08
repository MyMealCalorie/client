import { useEffect, useRef } from 'react';

import { useInput } from "../../hooks/useInput";

import styled from "styled-components";
import { S_Button } from '../../style/Button.style'

interface InputProps {
  value: any;
  onChange: any;
}

const S_Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;

const S_LogInButton = styled(S_Button)`
  width: 100%;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background: #fff;
`;

const S_LoginLayout = styled.div`
  width: 90%;
  height: auto;
`;
const LoginForm = () => {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => { emailRef.current?.focus() }, []);

  return (
    <S_LoginLayout>

      {/* Input: email, password  */}
      <S_Input 
        value={ email }
        onChange = { handleEmailChange }
        placeholder='이메일'
        name='login-email'
        type='email' 
        ref = { emailRef }
        />
      <S_Input 
        value={ password }
        onChange = { handlePasswordChange }
        placeholder='비밀번호'
        name='login-password'
        type='password' 
        />

      {/* Login button */}
      <S_LogInButton>로그인</S_LogInButton>
        
    </S_LoginLayout>
  );
}

export default LoginForm;