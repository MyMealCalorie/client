import styled from 'styled-components';

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
    <S_Content>
      {dataList.map(data => {
        return <OneMeal data={data} />;
      })}
    </S_Content>
  );
};

export default OneDayList;

const S_Content = styled.div`
  width: 90%;
`;
