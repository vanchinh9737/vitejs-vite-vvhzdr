// import './Home.scss';

// const HomePage_main = () => {
//   return <div className={'role'}>this love</div>;
// };

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//  fake du lieu
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'vi du Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'com',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [422, 157, 156, 222, 500, 350],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'po',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [500, 200, 100, 700, 100, 100],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'chao',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [100, 300, 550, 240, 350, 200],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const HomePage_main = () => {
  return <Bar options={options} data={data} />;
  // <div className={'role'}>this love</div>;
};
export default HomePage_main;
// const HomePage_main = () => {
//   return <div className={'role'}>this love</div>;
// };
