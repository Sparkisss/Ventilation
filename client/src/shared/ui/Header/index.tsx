import Icon from '@/assets/icons/Logo.svg';
import { Link } from 'react-router';
import { Button } from '../Button';

export function Header() {
  return (
    <header className="flex mb-10 w-full justify-between px-24 pt-4 pb-4  bg-gray-100">
      <img src={Icon} alt="icon" />
      <nav className="flex justify-center items-center">
        <ul className="flex gap-10">
          <Link to="/">Device</Link>
          <Link to="/settings">Setting</Link>
          <Link to="/archive">Archive</Link>
        </ul>
      </nav>
      <Button className="p-2 bg-black text-white">CONNECT DEVICE</Button>
    </header>
  );
}
