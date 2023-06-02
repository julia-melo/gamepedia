import { PropsWithChildren } from 'react';
import { Sizes } from '@/types';
import './heading.css';

interface HeadingProps {
  size: Sizes;
}

export default function Heading({
  size = Sizes.MEDIUM,
  children,
}: PropsWithChildren<HeadingProps>) {
  if (size === Sizes.SMALL) {
    return <h3 className="heading-small">{children}</h3>;
  }

  if (size === Sizes.MEDIUM) {
    return <h2 className="heading-medium">{children}</h2>;
  }

  return <h1 className="heading-large">{children}</h1>;
}
