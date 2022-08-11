import React from 'react';
import { Line } from '@ant-design/charts';

const Chart: React.FC = () => {
  const data = [
    { year: '2022', value: 3 },
    { year: '2023', value: 4 },
    { year: '2024', value: 3.5 },
    { year: '2025', value: 5 },
    { year: '2026', value: 4.9 },
    { year: '2027', value: 6 },
    { year: '2028', value: 7 },
    { year: '2029', value: 9 },
    { year: '2030', value: 13 },
  ];

  const config = {
    data,
    width: 800,
    height: 400,
    autoFit: false,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};
export default Chart;
