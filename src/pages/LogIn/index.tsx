import React from "react";

// Component
import CenterBox from "../../components/common/CenterBox";
import { FlexBox } from "../../style/FlexBox.style";
import Logo from '../../components/Login/Logo';
import LoginForm from "../../components/Login/LoginForm";
import Footer from "../../components/Login/Footer";


const LogIn = () => {

  return (
    <CenterBox width="350px" height="400px">
      <FlexBox flexDirection="column">
        
        {/* Logo */}
        <Logo />
        
        {/* LoginForm */}
        <LoginForm />
        
        {/* Footer */}
        <Footer />

      </FlexBox>
    </CenterBox> 
  );
}

export default LogIn;