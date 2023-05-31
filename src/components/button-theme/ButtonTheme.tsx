import { ThemeContext } from '@/contexts/theme/ThemeContext';
import { useContext } from 'react';

export default function ButtonTheme() {
  const { switchTheme } = useContext(ThemeContext);

  return <button onClick={switchTheme}>switch theme</button>;
}
