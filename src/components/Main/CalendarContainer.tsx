import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { S_FlexBox } from '../../style/FlexBox.style';

interface Props {
  date: Date;
  setDate: any;
}

const CalendarContainer = ({ date, setDate }: Props) => {
  const onChangeDate = (e: any) => {
    setDate(e);
  };

  return (
    <S_FlexBox width="40%">
      <Calendar value={date} onChange={onChangeDate} />
    </S_FlexBox>
  );
};

export default CalendarContainer;
