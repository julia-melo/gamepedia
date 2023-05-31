import ButtonTheme from '@/components/button-theme/ButtonTheme';
import { Outlet, Link, useNavigation } from 'react-router-dom';

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      Root component
      {navigation.state === 'loading' ? (
        'Loading...'
      ) : (
        <>
          <Link to={`game/hogwarts-legacy`}>Go to hogwarts legacy</Link>
          <Link to={`/`}>Return to root page</Link>
          <ButtonTheme />
          <Outlet />
        </>
      )}
    </>
  );
}
