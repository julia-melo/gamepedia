import ButtonBack from '../button-back/ButtonBack';
import ButtonTheme from '../button-theme/ButtonTheme';
import './navbar.css';

type NavbarProps = {
  showBackButton?: boolean;
};

export default function Navbar({ showBackButton = true }: NavbarProps) {
  return (
    <header>
      <span className="navbar-button">
        {showBackButton ? <ButtonBack /> : <span className="empty-back-button" />}
      </span>
      <h1>Gamepedia</h1>
      <span className="navbar-button">
        <ButtonTheme />
      </span>
    </header>
  );
}
