import { useInput } from '../../hooks/useInput';
import { S_FlexBox } from '../../style/FlexBox.style';
import S_CenterBox from '../../style/CenterBox.style';

import {
  S_AdditionalInformationModalWrapper,
  S_Label,
  S_InputWrapper,
  S_BlueBtn,
  S_RedBtn,
  S_Input,
  S_Gender,
  S_Unit,
  S_RadioForm,
  S_Title,
} from './style';

interface Props {
  modalHandler: () => void;
}

const AdditionalInformationModal = (props: Props) => {
  const { modalHandler } = props;

  const [year, onChangeYear] = useInput();
  const [height, onChangeHeight] = useInput('');
  const [weight, onChangeWeight] = useInput('');

  const onClickCloseModal = () => {
    modalHandler();
  };

  return (
    <S_CenterBox
      width="350px"
      height="400px"
      innerBackgroundColor="#fff"
      outerBackgroundColor="rgba(238,238,238,0.8)"
    >
      <S_AdditionalInformationModalWrapper>
        {/* 멘트 수정 가능 */}
        <S_Title marginBottom="30px">추가 정보 입력</S_Title>

        {/* 성별 radio 버튼 */}
        <S_InputWrapper>
          <S_Gender>성별</S_Gender>
          <S_RadioForm>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">남자</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">여자</label>
            </div>
          </S_RadioForm>
        </S_InputWrapper>

        {/* 생년 input */}
        <S_InputWrapper>
          <S_Label>생년:</S_Label>
          <S_Input
            value={year}
            onChange={onChangeYear}
            placeholder="yyyy"
            name="year"
            type="text"
          />
        </S_InputWrapper>

        {/* 신장 input */}
        <S_InputWrapper>
          <S_Label>신장:</S_Label>
          <S_Input
            value={height}
            onChange={onChangeHeight}
            placeholder="신장"
            name="height"
            type="text"
          />
          <S_Unit>cm</S_Unit>
        </S_InputWrapper>

        {/* 몸무게 input */}
        <S_InputWrapper>
          <S_Label>몸무게:</S_Label>
          <S_Input
            value={weight}
            onChange={onChangeWeight}
            placeholder="몸무게"
            name="weight"
            type="text"
          />
          <S_Unit>kg</S_Unit>
        </S_InputWrapper>

        {/* 요청 버튼들 / 디자인 변경 가능 */}
        <S_FlexBox width="100%" justifyContent="flex-end">
          <S_RedBtn onClick={onClickCloseModal}>취소</S_RedBtn>
          <S_BlueBtn>전송하기</S_BlueBtn>
        </S_FlexBox>
      </S_AdditionalInformationModalWrapper>
    </S_CenterBox>
  );
};

export default AdditionalInformationModal;
