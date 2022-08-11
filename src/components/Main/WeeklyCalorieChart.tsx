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
import { S_FlexBox } from '../../style/FlexBox.style';

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
    <S_FlexBox width="40%">
      <BarChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="칼로리" fill="#82ca9d" />
      </BarChart>
    </S_FlexBox>
  );
};

export default WeekCalorieChart;
