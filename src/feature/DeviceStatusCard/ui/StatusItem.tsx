import Man from '@/assets/photo/man.png';
import { default as CardDetails } from '@/shared/ui/CardDetails';
import { default as ImageWithValue } from '@/shared/ui/ImgWithValue';

const StatusItem = () => {
  return (
    <article className="flex justify-between mb-6 shadow-lg shadow-gray-500/50 p-4 rounded-2xl">
      <CardDetails
        image={Man}
        imageName="man"
        text="Igors"
        heigh="10"
        headSize="sm"
        textSize="sm"
      />
      <ImageWithValue heigh={'6'} text="lg" />
    </article>
  );
};

export default StatusItem;
