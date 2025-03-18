import Romb from '@/assets/icons/Vector.svg';
import Man from '@/assets/photo/man.png';
import CanalSensor from '@/assets/photo/PT1000.png';
import Woman from '@/assets/photo/woman28.png';
import { Button } from '@/shared/ui/Button';

const DeviceCard = () => {
  return (
    <article className="flex gap-16 mb-14">
      <img
        className="flex-1 max-w-[35%] rounded-2xl border-white"
        src={CanalSensor}
        alt="Canal sensor"
      />
      <article>
        <h2 className="font-semibold text-5xl leading-tight mb-7">Project Sun-Glass</h2>
        <div className="font-normal text-lg leading-7 mb-18">
          A collection of 10,000 utility-enabled PFPs that feature a richly diverse and
          unique pool of rarity-powered traits.{' '}
        </div>
        <article>
          <div className="flex justify-between mb-16">
            <article className="flex gap-2 items-center">
              <img className="h-16 justify-center flex" src={Woman} alt="Woman" />
              <div className="flex flex-col">
                <h3 className="font-normal text-lg leading-normal">Created by</h3>
                <div className="font-medium text-2xl leading-10">Perperzon</div>
              </div>
            </article>
            <article className="flex gap-2 items-center">
              <img className="h-16 justify-center flex" src={Man} alt="Man" />
              <div className="flex flex-col">
                <h3 className="font-normal text-lg leading-normal">Owned by</h3>
                <div className="font-medium text-2xl leading-10">Videz</div>
              </div>
            </article>
          </div>
          <div className="flex justify-between mb-14">
            <article className="items-center">
              <h3 className="font-normal text-lg leading-normal">Current Bid</h3>
              <div className="flex items-center gap-4">
                <img className="h-8 justify-center flex" src={Romb} alt="Romb" />
                <div className="font-medium text-2xl leading-10">1.75</div>
              </div>
            </article>
            <article className="flex flex-col justify-between">
              <h3 className="font-normal text-lg leading-normal text-right">End in</h3>
              <div>Jun 17, 2023 at 05:08</div>
            </article>
          </div>
        </article>
        <Button className="w-full h-20 bg-black text-white">Place Bid</Button>
      </article>
    </article>
  );
};

export default DeviceCard;
