import Navbar from '@/components/navbar/navbar';
import { Outlet, Link, useNavigation } from 'react-router-dom';

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === 'loading' ? (
        'Loading...'
      ) : (
        <>
          <Link to={`game/hogwarts-legacy`}>Go to hogwarts legacy</Link>
          <Link to={`/`}>Return to root page</Link>
          <Outlet />
        </>
      )}
    </>
  );
}
