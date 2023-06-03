import { getGameMissions } from '@/services/games';
import { LoaderProps, IGameMission } from '@/types';

export type GameMissionsLoader = {
  missions: IGameMission[];
};

export default async function loader({ params }: LoaderProps): Promise<GameMissionsLoader> {
  const missions = await getGameMissions(params.slug);
  return { missions };
}
