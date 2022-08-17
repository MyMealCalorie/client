import Calendar from 'react-calendar';
import './calendar.css';
import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Title } from '../common.style';

import { useAppDispath, useAppSelector } from '../../../_store/hooks';
import { changeDate } from '../../../_slices/dateSlice';

const CalendarContainer = () => {
  const dispatch = useAppDispath();

  const date = useAppSelector(state => state.date.value);

  const onChangeDate = (e: any) => {
    dispatch(changeDate(e));
  };

  return (
    <S_FlexBox width="40%" flexDirection="column">
      <S_Title>지난 칼로리 찾아보기</S_Title>
      <Calendar value={date} onChange={onChangeDate} />
    </S_FlexBox>
  );
};

export default CalendarContainer;
