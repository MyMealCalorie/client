import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import S_CenterBox from '../../style/CenterBox.style';
import {
  S_BottomBtns,
  S_BlankImg,
  S_Img,
  S_ImgWrapper,
  S_BlueBtn,
  S_SelectWrapper,
  S_Select,
} from './style';
import { S_CloseBtn } from '../common/style';
import { S_FlexBox } from '../../style/FlexBox.style';

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
      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    >
      <S_FlexBox
        flexDirection="column"
        width="90%"
        height="90%"
        background="white"
      >
        <S_CloseBtn onClick={onClickCloseModal}>✖︎</S_CloseBtn>
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
          <S_BlueBtn onClick={onClickUpload}>전송하기</S_BlueBtn>
        </S_BottomBtns>
      </S_FlexBox>
    </S_CenterBox>
  );
};

export default ImgUploadModal;
