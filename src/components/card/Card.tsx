import { Sizes } from '@/types';
import Text from '../text/Text';
import Heading from '../heading/Heading';
import './card.css';

type CardProps = {
  title: string;
  head: string;
  image: string;
  onClick: (id: string) => void;
  id: string;
};

export default function Card({ title, head, image, onClick, id }: CardProps) {
  return (
    <button className="card" onClick={() => onClick(id)}>
      <div className="card-background" style={{ backgroundImage: `url(${image})` }} />
      <div className="card-content">
        <Text className="card-text" size={Sizes.MEDIUM}>
          {head}
        </Text>
        <Heading className="card-text" size={Sizes.SMALL}>
          {title}
        </Heading>
      </div>
    </button>
  );
}
