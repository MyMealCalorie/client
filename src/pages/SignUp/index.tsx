import S_CenterBox from "../../style/CenterBox.style";
import { S_FlexBox } from "../../style/FlexBox.style";

import Title from "../../components/SignUp/Title";
import SignUpForm from "../../components/SignUp/SignUpForm";

const SignUp = () => {

  return (
    <S_CenterBox 
      width="350px"
      height="400px"
      innerBackgroundColor="#eee"
      >
      <S_FlexBox 
        flexDirection="column"
        width="90%">
        
        {/* Title */}
        <Title />

        {/* SignUpForm */}
        <SignUpForm />

      </S_FlexBox>
    </S_CenterBox> 
  );
}
export default SignUp;