import { PropsWithChildren } from 'react';
import { Sizes } from '@/types';
import './text.css';

type TextProps = {
  size?: Sizes;
  className?: string;
};

export default function Text({
  size = Sizes.MEDIUM,
  children,
  className = '',
}: PropsWithChildren<TextProps>) {
  return <p className={`text-${size} ${className}`}>{children}</p>;
}
