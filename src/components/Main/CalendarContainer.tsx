import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Props {
  date: Date;
  setDate: any;
}

const CalendarContainer = ({ date, setDate }: Props) => {
  const onChangeDate = (e: any) => {
    console.log(e);
    setDate(e);
  };

  return (
    <div>
      <Calendar value={date} onChange={onChangeDate} />
    </div>
  );
};

export default CalendarContainer;
