import { getGameDetails } from '@/services/games';
import { LoaderProps, IGameDetails } from '@/types';

export type GameDetailsLoader = {
  details: IGameDetails;
};

export default async function loader({ params }: LoaderProps): Promise<GameDetailsLoader> {
  const details = await getGameDetails(params.slug);
  return { details };
}
