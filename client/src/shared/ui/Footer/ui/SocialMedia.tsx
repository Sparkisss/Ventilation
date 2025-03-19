import Facebook from '@/assets/mediaIcons/facebook.svg';
import Instagram from '@/assets/mediaIcons/instagram.svg';
import Twit from '@/assets/mediaIcons/twitter.svg';
import VK from '@/assets/mediaIcons/vk.svg';

export function SocialMedia() {
  return (
    <article className="flex h-full items-center justify-between pr-24 pl-24">
      <div className="text-base leading-6 font-medium">
        © 2025 EATLY All Rights Reserved.
      </div>
      <ul className="flex">
        <li className="mr-12">
          <img className="w-6" src={Instagram} alt="instagram" />
        </li>
        <li className="mr-12">
          <img className="w-6" src={VK} alt="vkontakte" />
        </li>
        <li className="mr-12">
          <img className="w-6" src={Twit} alt="twit" />
        </li>
        <li>
          <img className="w-6" src={Facebook} alt="facebook" />
        </li>
      </ul>
    </article>
  );
}
