import CanalSensor from '@/assets/photo/PT1000.png';
import { Button } from '@/shared/ui/Button';
import { cardData } from '../config/cardData';
import CreatorInfo from './CreatorInfo';
import DeepInfo from './DeepInfo';
import ImagePreview from './ImagePreview';

const DeviceCard = () => {
  return (
    <article className="flex gap-16 mb-14">
      <ImagePreview src={CanalSensor} alt="Canal sensor" />
      <article>
        <h2 className="font-semibold text-5xl mb-7">{cardData.title}</h2>
        <div className="font-normal text-lg mb-18">{cardData.description}</div>

        <CreatorInfo creator={cardData.creator} owner={cardData.owner} />
        <DeepInfo bid={cardData.bid} endDate={cardData.endDate} />

        <Button className="w-full h-20 bg-black text-white">Place Bid</Button>
      </article>
    </article>
  );
};

export default DeviceCard;
