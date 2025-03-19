interface CardDetailsProps {
  image: string;
  imageName: string;
  text: string;
  heigh?: string;
  headSize?: string;
  textSize?: string;
}

const CardDetails = ({
  image,
  imageName,
  text,
  heigh = '16',
  headSize = 'lg',
  textSize = '2xl',
}: CardDetailsProps) => {
  return (
    <article className="flex gap-2 items-center">
      <img className={`h-${heigh}`} src={image} alt={imageName} />
      <div>
        <h3 className={`font-normal text-${headSize}`}>Created by</h3>
        <div className={`font-medium text-${textSize}`}>{text}</div>
      </div>
    </article>
  );
};

export default CardDetails;
