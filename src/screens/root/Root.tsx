import ButtonBack from '@/components/button-back/ButtonBack';
import ButtonTheme from '@/components/button-theme';
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
          <ButtonBack />
          <Link to={`game/hogwarts-legacy`}>Go to hogwarts legacy</Link>
          <Link to={`/`}>Return to root page</Link>
          <ButtonTheme />
          <Outlet />
        </>
      )}
    </>
  );
}
