import { DeviceCard } from '@/feature/DeviceCard';
import { DeviceChart } from '@/feature/DeviceChart';
import { Title } from './ui';

const DevicePage = () => {
  return (
    <section className="px-24">
      <Title />
      <DeviceCard />
      <DeviceChart />
    </section>
  );
};

export default DevicePage;
