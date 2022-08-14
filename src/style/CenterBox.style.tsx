import { S_CenterLayout } from './CenterLayout.style';
import { S_FlexBox } from './FlexBox.style';

interface Props {
  boxShadow?: string;
  outerBackgroundColor?: string;
  innerBackgroundColor?: string;
  children: string | JSX.Element | JSX.Element[];

  flexDirection?: string;
  width: string;
  height: string;
}

const S_CenterBox = (props: Props) => {
  return (
    <S_CenterLayout background={props.outerBackgroundColor}>
      <S_FlexBox
        flexDirection={props.flexDirection}
        width={props.width}
        height={props.height}
        background={props.innerBackgroundColor}
        boxShadow={props.boxShadow}
      >
        {/* Component 들어가는 자리 */}
        {props.children}
      </S_FlexBox>
    </S_CenterLayout>
  );
};

export default S_CenterBox;
