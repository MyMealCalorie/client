import { CenterLayout } from '../../style/CenterLayout.style';
import { FlexBox } from '../../style/FlexBox.style';

interface Props {
  background?: string;
  children: string | JSX.Element | JSX.Element[] ;

  width: string;
  height: string;
}

const CenterBox = (props: Props) => {
  return (
    <CenterLayout background={ props.background }>
      <FlexBox width={ props.width } height={ props.height }>
        
        {/* Component 들어가는 자리 */}
        { props.children }

      </FlexBox>
    </CenterLayout>
  );
}

export default CenterBox;