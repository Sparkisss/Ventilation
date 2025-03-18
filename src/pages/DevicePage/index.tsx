import { DeviceCard } from '@/feature/DeviceCard';
import { DeviceChart } from '@/feature/DeviceChart';
import DeviceStatusCard from '@/feature/DeviceStatusCard/ui/DeviceStatusCard';
import { ItemsList } from '@/feature/ItemsList';
import { Title } from './ui';

const DevicePage = () => {
  return (
    <section className="px-24">
      <Title />
      <DeviceCard />
      <div className="flex justify-between">
        <DeviceChart />
        <DeviceStatusCard />
      </div>
      <ItemsList />
    </section>
  );
};

export default DevicePage;
