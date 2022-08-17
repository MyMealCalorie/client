import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { S_FlexBox } from '../../../style/FlexBox.style';
import { S_Title } from '../common.style';
import { S_ChartWrapper } from './style';

const data = [
  {
    name: '월',
    칼로리: 400,
  },
  {
    name: '화',
    칼로리: 300,
  },
  {
    name: '수',
    칼로리: 200,
  },
  {
    name: '목',
    칼로리: 200,
  },
  {
    name: '금',
    칼로리: 200,
  },
  {
    name: '토',
    칼로리: 200,
  },
  {
    name: '일',
    칼로리: 200,
  },
];

const WeekCalorieChart = () => {
  return (
    <S_FlexBox width="40%" flexDirection="column">
      <S_Title>나의 일주일 칼로리</S_Title>

      <S_ChartWrapper>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip
              itemStyle={{ color: '#f6d853' }}
              // contentStyle={{ border: 'none' }}
              cursor={{ fill: '#fffbe9' }}
            />
            <Legend verticalAlign="bottom" align="center" />

            <Bar dataKey="칼로리" fill="#fdeead" />
          </BarChart>
        </ResponsiveContainer>
      </S_ChartWrapper>
    </S_FlexBox>
  );
};

export default WeekCalorieChart;
