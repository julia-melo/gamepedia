import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { ThemeContext, ThemeMode } from '@/contexts/theme/ThemeContext';
import ButtonIcon from '../button-icon';

export default function ButtonTheme() {
  const { themeMode, switchTheme } = useContext(ThemeContext);

  return (
    <ButtonIcon onClick={switchTheme}>
      {themeMode === ThemeMode.DARK ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </ButtonIcon>
  );
}
