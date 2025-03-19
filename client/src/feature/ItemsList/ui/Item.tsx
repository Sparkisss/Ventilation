import Picture1 from '@/assets/devices/img1.webp';
import { default as ImageWithValue } from '@/shared/ui/ImgWithValue';

const Item = () => {
  return (
    <article className="w-54 h-74 shadow-lg shadow-gray-500/50 p-4 rounded-2xl justify-between flex flex-col">
      <img className="w-47 h-41 rounded-2xl" src={Picture1} alt="Picture" />
      <article className="flex flex-col w-full">
        <div className="font-bold text-sm leading-6">Perperzon</div>
        <div className="font-semibold text-lg leading-7">Sun-Glass</div>
        <div className="flex justify-between">
          <ImageWithValue heigh="6" text="lg" />
          <div className="font-semibold text-xs leading-5">200</div>
        </div>
      </article>
    </article>
  );
};

export default Item;
