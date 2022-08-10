import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import S_CenterBox from '../../style/CenterBox.style';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_Button } from '../../style/Button.style';

interface Props {
  modalHandler: () => void;
}

const ImgUploadModal = (props: Props) => {
  const navigate = useNavigate();

  const { modalHandler } = props;
  const onClickCloseModal = () => modalHandler();

  const [imgFile, setImgFile] = useState<{}>();
  const [ImgFileBlob, setImgFileBlob] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ImgFileBlob) {
      fillImg(ImgFileBlob);
    }
  }, [ImgFileBlob]);

  const fillImg = (img: string) => {
    imgRef.current!.setAttribute('src', img);
  };

  // 1
  const onClickBlankImg = () => {
    if (inputRef) {
      inputRef.current!.click();
    }
  };

  // 2
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = e => {
      setImgFileBlob(e.target!.result as string);
    };

    // null check
    if (e) {
      const file = e.target.files![0];
      reader.readAsDataURL(file);
      setImgFile(file); // 이미지 전송을 위해서
    }
  };

  const onClickUpload = () => {
    // 요청 보내고 200 응답 받고

    // 전역 스토어 저장하고

    // 분석 페이지로 이동
    navigate('/img/analysis');
  };

  return (
    <S_CenterBox
      width="400px"
      height="400px"
      innerBackgroundColor="#fff"
      outerBackgroundColor="rgba(238,238,238,0.8)"
    >
      <S_Wrapper>
        {/* 식사 선택  */}
        <S_SelectWrapper>
          <S_Select>
            <option>아침</option>
            <option>점심</option>
            <option>저녁</option>
            <option>간식</option>
          </S_Select>
        </S_SelectWrapper>

        {/* 이미지 업로드, 미리보기  */}
        <S_ImgWrapper>
          {ImgFileBlob ? (
            <S_Img ref={imgRef} />
          ) : (
            <S_BlankImg onClick={onClickBlankImg}>이미지 업로드</S_BlankImg>
          )}

          <input
            onChange={e => onChangeImage(e)}
            ref={inputRef}
            type="file"
            accept="image/*"
            required
            style={{ display: 'none' }}
          />
        </S_ImgWrapper>

        {/* 버튼 */}
        <S_BottomBtns>
          <S_RedBtn onClick={onClickCloseModal}>취소</S_RedBtn>
          <S_BlueBtn onClick={onClickUpload}>전송하기</S_BlueBtn>
        </S_BottomBtns>
      </S_Wrapper>
    </S_CenterBox>
  );
};

export default ImgUploadModal;

const S_Wrapper = styled(S_FlexBox)`
  width: 90%;
  height: 90%;

  flex-direction: column;
  align-items: flex-start;
`;
const S_SelectWrapper = styled(S_FlexBox)`
  justify-content: flex-start;
  height: 20%;
`;
const S_Select = styled.select`
  width: 100px;
  height: 30px;
`;
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
const S_ImgWrapper = styled(S_FlexBox)`
  width: 100%;
  height: 60%;

  & {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    width: 100%;
    height: 200px;
  }
`;
const S_Img = styled.img`
  width: 100%;
  height: auto;
`;
const S_BlankImg = styled.div`
  width: 200px;
  height: 200px;
`;
const S_BottomBtns = styled(S_FlexBox)`
  width: 100%;
  height: 20%;
  justify-content: flex-end;
`;
