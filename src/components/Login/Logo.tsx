import { LogoWrapper } from './style';
import LogoImg from './../../assets/main_logo.png';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImg} />
    </LogoWrapper>
  );
};

export default Logo;
