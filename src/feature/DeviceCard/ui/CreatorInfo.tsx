import { default as CardDetails } from '@/shared/ui/CardDetails';
interface CreatorInfoProps {
  creator: { name: string; image: string };
  owner: { name: string; image: string };
}

const CreatorInfo = ({ creator, owner }: CreatorInfoProps) => {
  return (
    <div className="flex justify-between mb-16">
      <CardDetails image={creator.image} imageName={creator.name} text={creator.name} />
      <CardDetails image={owner.image} imageName={owner.name} text={owner.name} />
    </div>
  );
};

export default CreatorInfo;
