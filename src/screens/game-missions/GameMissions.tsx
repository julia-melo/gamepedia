import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Heading from '@/components/heading/Heading';
import { IGameMission, Sizes } from '@/types';
import Text from '@/components/text/Text';
import Card from '@/components/card/Card';
import { GameMissionsLoader } from './loader';
import './game-missions.css';

export default function GameMissions() {
  const { missions } = useLoaderData() as GameMissionsLoader;
  const location = useLocation();
  const navigate = useNavigate();

  const goToTipsPage = () => {
    navigate(location.pathname.replace('/missions', '/tips'));
  };

  return (
    <>
      <div className="game-missions-content">
        <Heading className="game-missions-title" size={Sizes.LARGE}>
          Missions
        </Heading>
        <Text size={Sizes.MEDIUM}>
          Before continuing to the Tips & Tricks page, select the game mission you’re currently at
          so you don't see any spoilers :)
        </Text>

        <div className="game-missions-list">
          {missions.map(({ order, title, img, id }: IGameMission) => (
            <Card
              id={id}
              head={`Mission ${order}`}
              title={title}
              image={img}
              key={`card-${order}`}
              onClick={goToTipsPage}
            />
          ))}
        </div>
      </div>
    </>
  );
}
