import { S_Section, S_H1, S_P, S_BottomBtns, S_Btn } from './style';

interface Props {
  bgImg: string;
  title: string;
  ment: string;
}

const Main = (props: Props) => {
  return (
    <S_Section bgImg={props.bgImg}>
      {/* title */}
      <S_H1>{props.title}</S_H1>

      {/* ment */}
      <S_P>{props.ment}</S_P>

      {/* buttons */}
      <S_BottomBtns>
        <S_Btn>로그인</S_Btn>
        <S_Btn>로그아웃</S_Btn>
      </S_BottomBtns>
    </S_Section>
  );
};

export default Main;
