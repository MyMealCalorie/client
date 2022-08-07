import { useEffect, useRef } from 'react';

import { useInput } from "../../hooks/useInput";

import styled from "styled-components";
import { Button } from '../../style/Button.style'

interface InputProps {
  value: any;
  onChange: any;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: auto;

  margin-bottom: 12px;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;

const LogInButton = styled(Button)`
  width: 100%;
  padding: 13px 12px;

  border: 1px solid #dedede;
  border-radius: 4px;

  background: #fff;
`;

const LoginLayout = styled.div`
  width: 90%;
  height: auto;
`;
const LoginForm = () => {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => { emailRef.current?.focus() }, []);

  return (
    <LoginLayout>

      {/* Input: email, password  */}
      <Input 
        value={ email }
        onChange = { handleEmailChange }
        placeholder='이메일'
        name='login-email'
        type='email' 
        ref = { emailRef }
        />
      <Input 
        value={ password }
        onChange = { handlePasswordChange }
        placeholder='비밀번호'
        name='login-password'
        type='password' 
        />

      {/* Login button */}
      <LogInButton>로그인</LogInButton>
        
    </LoginLayout>
  );
}

export default LoginForm;