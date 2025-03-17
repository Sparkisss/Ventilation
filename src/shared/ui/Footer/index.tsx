import { Navigation, SocialMedia } from './ui';

export function Footer() {
  return (
    <footer className="flex h-40 flex-col justify-between bg-black text-white">
      <Navigation />
      <SocialMedia />
    </footer>
  );
}
