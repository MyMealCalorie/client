import { S_ImgWrapper } from './style';
import React, { useState } from 'react';

const AnalyzedImg = () => {
  const [imgUrl, setImgUrl] = useState(
    'https://cdn.imweb.me/upload/S20200615b0849c262a5bf/d91910c88d19f.jpg'
  );
  return (
    <S_ImgWrapper>
      {/* <S_Time>아침</S_Time> */}
      <img src={imgUrl} />
    </S_ImgWrapper>
  );
};

export default AnalyzedImg;
