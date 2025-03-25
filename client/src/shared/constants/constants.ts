import DuctSensor from '@/assets/devices/img1.webp';
import {
  default as Fan,
  default as Pump,
  default as WatertSensor,
} from '@/assets/devices/img2.webp';
import TS1 from '@/assets/devices/img3.webp';
import PDS1 from '@/assets/devices/img4.png';
import Y1 from '@/assets/devices/img5.png';
import V1 from '@/assets/devices/img6.png';

export interface cardsDataType {
  id: number;
  img: string;
  type: string;
  name: string;
  description: string;
  textOne: string;
  textTwo: string;
  state: string;
  date: string;
}
export const cardsData: cardsDataType[] = [
  {
    id: 1,
    img: DuctSensor,
    type: 'Duct Sensor',
    name: 'PT-1000',
    description:
      'The duct temperature sensor Pt1000 is used in ventilation and air conditioning systems of residential, public, commercial, and industrial buildings.',
    textOne: 'Temperature',
    textTwo: 'Sensor',
    state: '19.2',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 2,
    img: WatertSensor,
    type: 'Wayer Sensor',
    name: 'PT-1000',
    description:
      'The duct temperature sensor Pt1000 is used in ventilation and air conditioning systems of residential, public, commercial, and industrial buildings.',
    textOne: 'Temperature',
    textTwo: 'Sensor',
    state: '1.9',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 3,
    img: TS1,
    type: 'TS',
    name: 'Danfoss-2-01',
    description:
      'For the protection of water heat exchangers in heating, ventilation, and air conditioning systems, where it is necessary to ensure that the temperature does not drop below a certain value',
    textOne: 'Freeze protection',
    textTwo: 'Sensor',
    state: 'Off',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 4,
    img: PDS1,
    type: 'PDS',
    name: 'Danfoss-11',
    description:
      'Designed to monitor excess pressure or pressure drops on the elements of ventilation and air conditioning systems.',
    textOne: 'Fan protection',
    textTwo: 'Sensor',
    state: 'Off',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 5,
    img: Y1,
    type: 'Damper',
    name: 'Danfoss-DF',
    description:
      'Designed for controlling air dampers in ventilation systems with a water heater, heating, and air conditioning systems.',
    textOne: 'Open air',
    textTwo: 'Damper',
    state: 'Off',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 6,
    img: V1,
    type: 'Electric driver',
    name: 'Ridan-32-220',
    description:
      'Designed for use with control valves in heating and cooling supply systems.',
    textOne: 'Electric driver',
    textTwo: 'Electric driver',
    state: '36%',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 7,
    img: Pump,
    type: 'Pump',
    name: 'Willo-120-11',
    description: 'Designed to create forced circulation of liquid.',
    textOne: 'Circulation',
    textTwo: 'Circulation',
    state: 'Off',
    date: 'Jun 17, 2023 at 05:08',
  },
  {
    id: 8,
    img: Fan,
    type: 'Fan',
    name: 'Zvezda-380/2.2',
    description: 'Designed for moving air or other non-explosive gas mixtures.',
    textOne: 'Fan',
    textTwo: 'Fan',
    state: 'On',
    date: 'Jun 17, 2023 at 05:08',
  },
];
