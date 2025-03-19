import Romb from '@/assets/icons/Vector.svg';

interface Props {
  heigh: string;
  text: string;
}

const ImgWithValue = ({ heigh, text }: Props) => {
  return (
    <article className="flex items-center gap-4">
      <img className={`h-${heigh}`} src={Romb} alt="Currency" />
      <div className={`font-medium text-${text}`}>1.75</div>
    </article>
  );
};

export default ImgWithValue;
