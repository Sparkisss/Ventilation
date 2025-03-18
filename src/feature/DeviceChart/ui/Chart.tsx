import { Line } from 'react-chartjs-2';
import { data } from '../config/chartData';
import { options } from '../config/chartOptions';

const Chart = () => {
  return (
    <article className="w-210 h-115 shadow-lg shadow-gray-500/50 p-4 rounded-2xl mb-30">
      <Line options={options} data={data} />
    </article>
  );
};

export default Chart;
