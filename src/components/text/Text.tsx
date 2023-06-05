import { PropsWithChildren } from 'react';
import { Colors, Sizes } from '@/types';
import './text.css';

type TextProps = {
  size?: Sizes;
  className?: string;
  color?: Colors;
};

export default function Text({
  size = Sizes.MEDIUM,
  children,
  className = '',
  color = Colors.ON_BACKGROUND,
}: PropsWithChildren<TextProps>) {
  return (
    <p className={`text-${size} ${className}`} style={{ color }}>
      {children}
    </p>
  );
}
