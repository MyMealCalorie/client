import { S_ImgWrapper } from './style';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  coords: {
    name: string;
    calorie: number;
    x: number;
    y: number;
    w: number;
    h: number;
  }[];
}

const AnalyzedImg = ({ coords }: Props) => {
  const [imgUrl, setImgUrl] = useState(
    'https://cdn.imweb.me/upload/S20200615b0849c262a5bf/d91910c88d19f.jpg'
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    if (canvas.getContext) {
      const context = canvas.getContext('2d');
      if (!context) return;

      // 이미지 좌표값 확인 코드
      canvas.addEventListener('click', e => {
        console.log('X: ', e.offsetX, ' Y: ', e.offsetY);
      });
      //

      let imageObj = new Image();

      // 이미지 로드가 완료된 후 이미지 url 삽입
      imageObj.onload = function () {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.width * (imageObj.height / imageObj.width);
        context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

        // 각 객체가 해당하는 좌표에 사각형 & 텍스트(이름) 배치
        // 사각형 디자인
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        // 텍스트 디자인
        context.font = '10px black';
        context.textBaseline = 'bottom';
        // 그리기
        coords.map(rect => {
          context.strokeRect(rect.x, rect.y, rect.w, rect.h);
          context.fillText(rect.name, rect.x, rect.y);
        });
      };
      imageObj.src = imgUrl;
    }
  });

  return (
    <S_ImgWrapper>
      {/*<img src={imgUrl} />*/}
      <canvas ref={canvasRef} className="img-canvas" />
    </S_ImgWrapper>
  );
};

export default AnalyzedImg;
