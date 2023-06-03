import { PropsWithChildren } from 'react';
import { Sizes } from '@/types';
import './heading.css';

type HeadingProps = {
  size?: Sizes;
  className?: string;
};

export default function Heading({
  size = Sizes.MEDIUM,
  children,
  className = '',
}: PropsWithChildren<HeadingProps>) {
  if (size === Sizes.SMALL) {
    return <h3 className={`heading-small ${className}`}>{children}</h3>;
  }

  if (size === Sizes.MEDIUM) {
    return <h2 className={`heading-medium ${className}`}>{children}</h2>;
  }

  return <h1 className={`heading-large ${className}`}>{children}</h1>;
}
