import Root from './screens/root';
import GameDetails, { gameDetailsLoader } from './screens/game-details';
import GameMissions, { gameMissionsLoader } from './screens/game-missions';

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
      {
        path: 'game/:slug/missions',
        element: <GameMissions />,
        loader: gameMissionsLoader,
      },
      {
        path: 'game/:slug/tips',
        element: <h1>Tips page</h1>,
      },
    ],
  },
];
