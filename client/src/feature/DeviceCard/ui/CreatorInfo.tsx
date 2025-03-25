import Chart from '@/assets/photo/chart-pie-alt.svg';
import Characteristic from '@/assets/photo/settings-sliders.svg';
import { default as CardDetails } from '@/shared/ui/CardDetails';

interface CreatorInfoProps {
  textOne: string;
  textTwo: string;
}

const CreatorInfo = ({ textOne, textTwo }: CreatorInfoProps) => {
  return (
    <div className="flex justify-between mb-16">
      <CardDetails image={Chart} imageName="chart" text={textOne} />
      <CardDetails image={Characteristic} imageName={Characteristic} text={textTwo} />
    </div>
  );
};

export default CreatorInfo;
