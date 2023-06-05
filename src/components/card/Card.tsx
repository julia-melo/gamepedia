import { Colors, Sizes } from '@/types';
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
        <Text size={Sizes.MEDIUM} color={Colors.ON_BACKGROUND_MEDIA}>
          {head}
        </Text>
        <Heading size={Sizes.SMALL} color={Colors.ON_BACKGROUND_MEDIA}>
          {title}
        </Heading>
      </div>
    </button>
  );
}
