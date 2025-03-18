import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      border: { display: false },
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      display: true,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
      min: 0,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        boxWidth: 30,
        boxHeight: 2,
      },
    },
    title: {
      display: true,
      position: 'top' as const,
      align: 'start' as const,
      text: 'PT-1000',
    },
    tooltip: {
      callbacks: {
        title: () => ' ',
        label: (tooltipItem: any) => {
          return `${tooltipItem.raw}°C `;
        },
        labelColor: () => ({
          backgroundColor: 'transparent',
          borderColor: 'rgba(0, 0, 0, 0)',
        }),
      },
    },
  },
};
