import { S_OneDayListtWrapper } from './style';

// Component
import OneMeal from './OneMeal';

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
  return (
    <S_OneDayListtWrapper>
      {dataList.map(data => {
        return <OneMeal data={data} />;
      })}
    </S_OneDayListtWrapper>
  );
};

export default OneDayList;
