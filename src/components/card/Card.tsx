import { MouseEventHandler } from 'react';
import { Sizes } from '@/types';
import Text from '../text/Text';
import Heading from '../heading/Heading';
import './card.css';

type CardProps = {
  title: string;
  head: string;
  image: string;
  onClick?: MouseEventHandler;
};

export default function Card({ title, head, image, onClick }: CardProps) {
  return (
    <div className="card" style={{ cursor: onClick ? 'pointer' : 'auto' }}>
      <div className="card-background" style={{ backgroundImage: `url(${image})` }} />
      <div className="card-content">
        <Text size={Sizes.MEDIUM}>{head}</Text>
        <Heading size={Sizes.SMALL}>{title}</Heading>
      </div>
    </div>
  );
}
