import Back from '@/assets/icons/ArrowBack.svg';
import { Button } from '@/shared/ui/Button';

const Title = () => {
  return (
    <article className="flex gap-8 mb-14">
      <Button className="w-9 h-9" icon={Back}>
        {' '}
      </Button>
      <h2 className="font-semibold text-2xl leading-tight">Product Detail</h2>
    </article>
  );
};

export default Title;
