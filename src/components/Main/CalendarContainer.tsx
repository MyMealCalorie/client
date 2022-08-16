import Calendar from 'react-calendar';
import './style/calendar.css';
import { S_FlexBox } from '../../style/FlexBox.style';
import { S_CalendarTitle } from './style';

import { useAppDispath } from '../../_store/hooks';
import { changeDate } from '../../_slices/dateSlice';

interface Props {
  date: Date;
}

const CalendarContainer = ({ date }: Props) => {
  const dispatch = useAppDispath();

  const onChangeDate = (e: any) => {
    dispatch(changeDate(e));
  };

  return (
    <S_FlexBox width="40%" flexDirection="column">
      <S_CalendarTitle>지난 칼로리 찾아보기</S_CalendarTitle>
      <Calendar value={date} onChange={onChangeDate} />
    </S_FlexBox>
  );
};

export default CalendarContainer;
