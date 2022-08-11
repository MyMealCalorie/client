import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import S_CenterBox from '../../style/CenterBox.style';
import {
  S_BottomBtns,
  S_BlankImg,
  S_Img,
  S_ImgWrapper,
  S_RedBtn,
  S_BlueBtn,
  S_ImgUploadModalWrapper,
  S_SelectWrapper,
  S_Select,
} from './style';

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
      <S_ImgUploadModalWrapper>
        {/* 식사 선택  */}
        <S_SelectWrapper>
          <S_Select>
            <option>아침</option>
            <option>점심</option>
            <option>저녁</option>
            <option>간식</option>
          </S_Select>
        </S_SelectWrapper>

        {/* 이미지 업로드박스 or 이미지 미리보기  */}
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
      </S_ImgUploadModalWrapper>
    </S_CenterBox>
  );
};

export default ImgUploadModal;
