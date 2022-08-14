import Header from '../../components/common/Header';

import { S_FlexBox } from '../../style/FlexBox.style';

import Main from '../../components/Home/Main';
import CARROTS from '../../assets/carrots.jpg';

const Home = () => {
  return (
    <S_FlexBox flexDirection="column">
      {/* Header */}
      <Header />

      {/* Main 이미지, 멘트 영역 */}
      <Main
        bgImg={CARROTS}
        title="내 밥 몇 칼로리?"
        ment=" 사진 한 장으로 손쉽게 나의 섭취 칼로리를 계산하고, 관리해 보세요!"
      />
    </S_FlexBox>
  );
};

export default Home;
