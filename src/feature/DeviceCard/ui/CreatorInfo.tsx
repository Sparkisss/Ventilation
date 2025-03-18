interface CreatorInfoProps {
  creator: { name: string; image: string };
  owner: { name: string; image: string };
}

const CreatorInfo = ({ creator, owner }: CreatorInfoProps) => {
  return (
    <div className="flex justify-between mb-16">
      <article className="flex gap-2 items-center">
        <img className="h-16" src={creator.image} alt={creator.name} />
        <div>
          <h3 className="font-normal text-lg">Created by</h3>
          <div className="font-medium text-2xl">{creator.name}</div>
        </div>
      </article>
      <article className="flex gap-2 items-center">
        <img className="h-16" src={owner.image} alt={owner.name} />
        <div>
          <h3 className="font-normal text-lg">Owned by</h3>
          <div className="font-medium text-2xl">{owner.name}</div>
        </div>
      </article>
    </div>
  );
};

export default CreatorInfo;
