interface CardDetailsProps {
  image: string;
  imageName: string;
  text: string;
  heightClass?: string; // Новый пропс для класса высоты
  headSize?: string;
  textSize?: string;
}

const CardDetails = ({
  image,
  imageName,
  text,
  heightClass = 'h-16',
  headSize = 'lg',
  textSize = '2xl',
}: CardDetailsProps) => {
  return (
    <article className="flex gap-2 items-center">
      <img className={heightClass} src={image} alt={imageName} />
      <div>
        <h3 className={`font-normal text-${headSize}`}>Details about</h3>
        <div className={`font-medium text-${textSize}`}>{text}</div>
      </div>
    </article>
  );
};

export default CardDetails;
