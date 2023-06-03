import { Outlet, Link, useNavigation } from 'react-router-dom';
import Navbar from '@/components/navbar';
import './root.css';

export default function Root() {
  const navigation = useNavigation();

  return (
    <div className="root-page">
      <Navbar />
      {navigation.state === 'loading' ? (
        'Loading...'
      ) : (
        <section className="root-container">
          {/* <Link to={`game/hogwarts-legacy`}>Go to hogwarts legacy</Link>
          <Link to={`/`}>Return to root page</Link> */}
          <Outlet />
        </section>
      )}
    </div>
  );
}
