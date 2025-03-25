import Event from '@/assets/photo/calendar-arrow-down.svg';
import { default as CardDetails } from '@/shared/ui/CardDetails';
import { default as ImageWithValue } from '@/shared/ui/ImgWithValue';

const StatusItem = () => {
  return (
    <article className="flex justify-between mb-6 shadow-lg shadow-gray-500/50 p-4 rounded-2xl">
      <CardDetails
        image={Event}
        imageName="man"
        text="Igors"
        heightClass="h-10"
        headSize="sm"
        textSize="sm"
      />
      <ImageWithValue heigh={'6'} text="lg" />
    </article>
  );
};

export default StatusItem;
