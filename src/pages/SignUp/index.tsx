import S_CenterBox from '../../style/CenterBox.style';
import { S_FlexBox } from '../../style/FlexBox.style';

import Title from '../../components/SignUp/Title/index';
import SignUpForm from '../../components/SignUp/SignUpForm/index';
import Header from '../../components/common/Header';
const SignUp = () => {
  return (
    <>
      <Header />

      <S_CenterBox
        width="350px"
        height="500px"
        outerBackgroundColor="#fff"
        innerBackgroundColor="#fdfdfd"
        boxShadow=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        borderRadius="5px"
      >
        <S_FlexBox flexDirection="column" width="90%">
          {/* Index */}
          <Title />

          {/* Index */}
          <SignUpForm />
        </S_FlexBox>
      </S_CenterBox>
    </>
  );
};
export default SignUp;
