import styled from 'styled-components';
import S_CenterBox from '../../style/CenterBox.style';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_Button } from '../../style/Button.style';

import { useInput } from '../../hooks/useInput';

interface Props {
  modalHandler: () => void;
}
interface InputProps {
  value: any;
  onChange: any;
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
      <S_Wrapper>
        {/* 멘트 수정 가능 */}
        <S_Title>추가 정보 입력</S_Title>

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
      </S_Wrapper>
    </S_CenterBox>
  );
};

export default AdditionalInformationModal;

const S_Wrapper = styled(S_FlexBox)`
  flex-direction: column;

  width: 80%;
  height: 80%;
`;
const S_Label = styled.label`
  width: 20%;
  color: gray;
  font-size: 0.8rem;
`;
const S_InputWrapper = styled(S_FlexBox)`
  width: 100%;
  height: auto;

  justify-content: flex-start;
  margin-bottom: 20px;
`;
const S_Input = styled.input<InputProps>`
  width: 30%;
  height: auto;

  padding: 13px 12px;
  margin-right: 2px;

  border: 1px solid #dedede;
  border-radius: 4px;
`;
const S_Gender = styled.div`
  width: 20%;
  color: gray;
  font-size: 0.8rem;
  margin-left: 2px;
`;
const S_Title = styled(S_FlexBox)`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;

  margin-bottom: 30px;
`;
const S_RadioForm = styled.form`
  width: 80%;

  display: flex;

  div {
    margin-right: 10px;
  }
  label {
    padding-left: 5px;
  }
`;
const S_Unit = styled(S_FlexBox)`
  align-items: flex-end; // 왜 안먹지..
  height: auto;
`;

// 버튼 상속
const S_Btn = styled(S_Button)`
  color: white;
  font-weight: bold;
  padding: 10px;
`;
const S_RedBtn = styled(S_Btn)`
  background-color: red;
  margin-right: 5px;
`;
const S_BlueBtn = styled(S_Btn)`
  background-color: blue;
`;
