import { cardsDataType } from '@/shared/constants/constants';
import { Button } from '@/shared/ui/Button';
import CreatorInfo from './CreatorInfo';
import DeepInfo from './DeepInfo';
import ImagePreview from './ImagePreview';
interface DeviceCardProps {
  isSelected: cardsDataType | null;
}

const DeviceCard = ({ isSelected }: DeviceCardProps) => {
  if (!isSelected) {
    return <div>No device selected</div>;
  }

  return (
    <article className="flex gap-8 mb-14 shadow-lg shadow-gray-500/50 p-10 rounded-2xl">
      <ImagePreview src={isSelected.img} alt="Canal sensor" />
      <article className="w-[60%]">
        <h2 className="font-semibold text-5xl mb-7">
          {isSelected.type} {isSelected.name}
        </h2>
        <div className="font-normal text-lg mb-18">{isSelected.description}</div>
        <CreatorInfo textOne={isSelected.textOne} textTwo={isSelected.textTwo} />
        <DeepInfo endDate={isSelected.date} state={isSelected.state} />
        <Button className="w-full h-20 bg-black text-white">Place Bid</Button>
      </article>
    </article>
  );
};

export default DeviceCard;
