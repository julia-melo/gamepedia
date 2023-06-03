import { PropsWithChildren } from 'react';

import './button-icon.css';

type ButtonIconProps = {
  onClick: () => void;
};

export default function ButtonIcon({ onClick, children }: PropsWithChildren<ButtonIconProps>) {
  return (
    <button className="button-icon" onClick={onClick}>
      {children}
    </button>
  );
}
