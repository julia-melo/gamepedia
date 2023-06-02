import { PropsWithChildren } from 'react';
import { Sizes } from '@/types';
import './text.css';

interface TextProps {
  size: Sizes;
}

export default function Text({ size = Sizes.MEDIUM, children }: PropsWithChildren<TextProps>) {
  return <p className={`text-${size}`}>{children}</p>;
}
