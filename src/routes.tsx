import Root from './screens/root';
import GameDetails, { gameDetailsLoader } from './screens/game-details';

export default [
  {
    path: '/',
    element: <Root />,
    errorElement: <div>ops! something went wrong</div>,
    children: [
      {
        path: 'game/:slug',
        element: <GameDetails />,
        loader: gameDetailsLoader,
      },
    ],
  },
];
