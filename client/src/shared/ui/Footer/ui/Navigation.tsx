import LogoWhite from '@/assets/icons/LogoWhite.svg';

export function Navigation() {
  return (
    <article className="flex h-full items-center justify-center pt-4 pr-24 pl-24 border-b-2">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-center">
          <img className="mr-3.5" src={LogoWhite} alt="logo" />
          <div className="text-2xl leading-10 font-semibold">DiveSea</div>
        </div>
        <div>Ventilation staff</div>
      </div>
    </article>
  );
}
