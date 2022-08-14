import { S_OneDayListtWrapper } from './style';

// Component
import OneMeal from './OneMeal';
import { S_FlexBox } from '../../style/FlexBox.style';
import { useState } from 'react';
import { S_Button } from '../../style/Button.style';

interface Props {
  dataList: {
    time: string;
    imgUrl: string;
    calorie: number;
    detail: {
      name: string;
      calorie: number;
    }[];
  }[];
}

const OneDayList = ({ dataList }: Props) => {
  // 목록 4개씩 나누기
  let list = [];
  let temp = [];
  for (let i = 0; i < dataList.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      list.push(temp);
      temp = [];
    }
    temp.push(dataList[i]);
  }
  if (temp !== []) list.push(temp);

  const [idx, setIdx] = useState(0);

  const onClickPrev = () => {
    if (idx === 0) return;
    setIdx(prev => prev - 1);
  };

  const onClickNxt = () => {
    if (idx === list.length - 1) return;
    setIdx(prev => prev + 1);
  };

  return (
    <S_FlexBox>
      <S_Button onClick={onClickPrev}>{'◀︎'}</S_Button>
      <S_OneDayListtWrapper>
        {list[idx].map(data => {
          return <OneMeal data={data} />;
        })}
      </S_OneDayListtWrapper>
      <S_Button onClick={onClickNxt}>{'▶︎'}</S_Button>
    </S_FlexBox>
  );
};

export default OneDayList;
