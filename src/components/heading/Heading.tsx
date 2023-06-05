import { PropsWithChildren } from 'react';
import { Colors, Sizes } from '@/types';
import './heading.css';

type HeadingProps = {
  size?: Sizes;
  className?: string;
  color?: Colors;
};

export default function Heading({
  size = Sizes.MEDIUM,
  children,
  className = '',
  color = Colors.ON_BACKGROUND,
}: PropsWithChildren<HeadingProps>) {
  if (size === Sizes.SMALL) {
    return (
      <h3 className={`heading-small ${className}`} style={{ color }}>
        {children}
      </h3>
    );
  }

  if (size === Sizes.MEDIUM) {
    return (
      <h2 className={`heading-medium ${className}`} style={{ color }}>
        {children}
      </h2>
    );
  }

  return (
    <h1 className={`heading-large ${className}`} style={{ color }}>
      {children}
    </h1>
  );
}
