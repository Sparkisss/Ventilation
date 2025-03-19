import { Button } from '@/shared/ui/Button';
import StatusItem from './StatusItem';

const DeviceStatusCard = () => {
  return (
    <article className="flex flex-col shadow-lg shadow-gray-500/50 p-4 rounded-2xl mb-30 w-[20%] h-115">
      <article className="mb-10">
        <h3 className="font-semibold text-sm leading-5">Device status</h3>
        <div className="font-normal text-xs leading-3">Oct 14, 2022</div>
      </article>
      <StatusItem />
      <StatusItem />
      <StatusItem />
      <Button className="bg-black text-white p-5">Auto</Button>
    </article>
  );
};

export default DeviceStatusCard;
