import {useState} from "react";
import styled from "styled-components";

// Component
import { S_FlexBox } from "../../style/FlexBox.style";
import OneMeal from "../common/OneMeal";

const OneDayList = () => {

  const [oneDayData, setOneDayData] = useState([  // key값 변경
    {time: "아침", imgUrl: "https://cdn.imweb.me/upload/S20200615b0849c262a5bf/d91910c88d19f.jpg", calorie: 400},
    {time: "점심", imgUrl: "img", calorie: 300},
    {time: "저녁", imgUrl: "img", calorie: 500},
    {time: "기타", imgUrl: "img", calorie: 600}
  ]);

  return (
    <S_Wrapper>
      <S_Content>
        {oneDayData.map((oneday) => {
          return <OneMeal time={oneday.time} imgUrl={oneday.imgUrl} calorie={oneday.calorie}/>
        })}
      </S_Content>
    </S_Wrapper>
  )
}

export default OneDayList;

const S_Wrapper = styled(S_FlexBox)`
  flex-direction: column;
  border: 1px solid;
  width: 300px;
  height: 450px;
`

const S_Content = styled.div`
  width: 90%;
`