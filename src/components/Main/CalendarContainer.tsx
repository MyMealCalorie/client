import Calendar from 'react-calendar';
import './style/calendar.css';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_CalendarTitle } from './style';

interface Props {
  date: Date;
  setDate: any;
}

const CalendarContainer = ({ date, setDate }: Props) => {
  const onChangeDate = (e: any) => {
    setDate(e);
  };

  return (
    <S_FlexBox width="40%" flexDirection="column">
      <S_CalendarTitle>지난 칼로리 찾아보기</S_CalendarTitle>
      <Calendar value={date} onChange={onChangeDate} />
    </S_FlexBox>
  );
};

export default CalendarContainer;
