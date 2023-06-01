import { PropsWithChildren } from 'react';

import './button-icon.css';

interface IButtonIcon {
  onClick: () => void;
}

export default function ButtonIcon({ onClick, children }: PropsWithChildren<IButtonIcon>) {
  return (
    <button className="button-icon" onClick={onClick}>
      {children}
    </button>
  );
}
