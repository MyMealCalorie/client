import React from 'react';

// Component
import CenterBox from '../../style/CenterBox.style';
import { S_FlexBox } from '../../style/FlexBox.style';
import Logo from '../../components/Login/Logo';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Login/Footer';

import Header from '../../components/common/Header';
const LogIn = () => {
  return (
    <>
      <Header />

      <CenterBox
        width="350px"
        height="450px"
        outerBackgroundColor="#fff"
        innerBackgroundColor="#fdfdfd"
        boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        borderRadius="5px"
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
    </>
  );
};

export default LogIn;
