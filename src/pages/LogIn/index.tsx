import React from 'react';

// Component
import CenterBox from '../../style/CenterBox.style';
import { S_FlexBox } from '../../style/FlexBox.style';
import Logo from '../../components/Login/Logo';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Login/Footer';

const LogIn = () => {
  return (
    <CenterBox
      width="350px"
      height="400px"
      outerBackgroundColor="#fff"
      innerBackgroundColor="#eee"
    >
      <S_FlexBox flexDirection="column">
        {/* Logo */}
        <Logo />

        {/* LoginForm */}
        <LoginForm />

        {/* Footer */}
        <Footer />
      </S_FlexBox>
    </CenterBox>
  );
};

export default LogIn;
