import styled from 'styled-components';
import { S_CenterLayout } from './CenterLayout.style';
import { S_FlexBox } from './FlexBox.style';

interface Props extends S_FLexBox2 {
  outerBackgroundColor?: string;
  innerBackgroundColor?: string;
  children: string | JSX.Element | JSX.Element[];

  width: string;
  height: string;
}

interface S_FLexBox2 {
  border?: string;
  borderRadius?: string;

  boxShadow?: string;
}

const S_CenterBox = (props: Props) => {
  return (
    <S_CenterLayout background={props.outerBackgroundColor}>
      <S_FlexBox2
        width={props.width}
        height={props.height}
        background={props.innerBackgroundColor}
        border={props.border}
        boxShadow={props.boxShadow}
        borderRadius={props.borderRadius}
      >
        {/* Component 들어가는 자리 */}
        {props.children}
      </S_FlexBox2>
    </S_CenterLayout>
  );
};

export default S_CenterBox;

const S_FlexBox2 = styled(S_FlexBox)<S_FLexBox2>`
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  box-shadow: ${props => props.boxShadow};
`;
