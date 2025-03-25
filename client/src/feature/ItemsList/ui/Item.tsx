import { cardsDataType } from '@/shared/constants/constants';
import { default as ImageWithValue } from '@/shared/ui/ImgWithValue';

interface ItemProps {
  id: number;
  img: string;
  type: string;
  name: string;
  description: string;
  textOne: string;
  textTwo: string;
  state: string;
  date: string;
  setIsSelected: (card: cardsDataType) => void;
}

const Item = ({
  id,
  img,
  type,
  name,
  description,
  textOne,
  textTwo,
  state,
  date,
  setIsSelected,
}: ItemProps) => {
  const card: cardsDataType = {
    id,
    img,
    type,
    name,
    description,
    textOne,
    textTwo,
    state,
    date,
  };

  const handleClick = () => {
    setIsSelected(card);
  };

  return (
    <article className="w-54 h-74 shadow-lg shadow-gray-500/50 p-4 rounded-2xl justify-between flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-700/70 active:scale-95 active:shadow-sm active:bg-gray-100">
      <img
        className="cursor-pointer w-47 h-41 rounded-2xl"
        src={img}
        alt="Picture"
        onClick={handleClick}
      />
      <article className="flex flex-col w-full">
        <div className="font-bold text-sm leading-6">{type}</div>
        <div className="font-semibold text-lg leading-7">{name}</div>
        <div className="flex justify-between">
          <ImageWithValue heigh="6" text="lg" state={state} />
          <div className="flex flex-col justify-end font-semibold text-xs leading-5">
            {date}
          </div>
        </div>
      </article>
    </article>
  );
};

export default Item;
