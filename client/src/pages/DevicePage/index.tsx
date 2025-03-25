import { DeviceCard } from '@/feature/DeviceCard';
import { DeviceChart } from '@/feature/DeviceChart';
import DeviceStatusCard from '@/feature/DeviceStatusCard/ui/DeviceStatusCard';
import { ItemsList } from '@/feature/ItemsList';
import { cardsData, cardsDataType } from '@/shared/constants/constants';
import { useState } from 'react';
import { Title } from './ui';

const DevicePage = () => {
  const [isSelected, setIsSelected] = useState<cardsDataType | null>(cardsData[0]);

  return (
    <section className="px-24">
      <Title />
      <DeviceCard isSelected={isSelected} />
      <div className="flex justify-between">
        <DeviceChart />
        <DeviceStatusCard />
      </div>
      <ItemsList cardsData={cardsData} setIsSelected={setIsSelected} />
    </section>
  );
};

export default DevicePage;
