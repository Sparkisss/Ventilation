const labels = ['00-00', '04-00', '08-00', '12-00', '16-00', '20-00'];
const faker = [6, 8, 12, 11, 11, 9];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Temperature',
      data: faker,
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgb(255, 255, 255)',
      tension: 0.95,
    },
  ],
};
