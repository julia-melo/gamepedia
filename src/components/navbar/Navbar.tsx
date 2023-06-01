import ButtonBack from '../button-back/ButtonBack';
import ButtonTheme from '../button-theme/ButtonTheme';
import './navbar.css';

export default function Navbar() {
  return (
    <header>
      <ButtonBack />
      <h1>Gamepedia</h1>
      <ButtonTheme />
    </header>
  );
}
