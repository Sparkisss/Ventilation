import { default as ImageWithValue } from '@/shared/ui/ImgWithValue';
interface DeepInfoProps {
  endDate: string;
}

const DeepInfo = ({ endDate }: DeepInfoProps) => {
  return (
    <div className="flex justify-between mb-14">
      <article>
        <h3 className="font-normal text-lg">Current Bid</h3>
        <ImageWithValue heigh="8" text="2xl" />
      </article>
      <article className="flex flex-col items-end">
        <h3 className="font-normal text-lg">End in</h3>
        <div>{endDate}</div>
      </article>
    </div>
  );
};

export default DeepInfo;
