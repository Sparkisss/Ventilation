import Romb from '@/assets/icons/Vector.svg';

interface Props {
  state: string;
  heigh: string;
  text: string;
}

const ImgWithValue = ({ heigh, text, state }: Props) => {
  return (
    <article className="flex items-center gap-4">
      <img className={`h-${heigh}`} src={Romb} alt="Currency" />
      <div className={`font-medium text-${text}`}>{state}</div>
    </article>
  );
};

export default ImgWithValue;
