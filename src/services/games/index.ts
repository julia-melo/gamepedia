import axios from 'axios';
import { IGameDetails, IGameMission } from '@/types/game-details';

export async function getGameDetails(_slug: string): Promise<IGameDetails> {
  const response = await axios.get(
    'https://run.mocky.io/v3/b9e760a6-2ef4-4a28-9b9a-8fb4b5174165?mocky-delay=800ms'
  );
  return response.data;
}

export async function getGameMissions(_slug: string): Promise<IGameMission[]> {
  const response = await axios.get(
    'https://run.mocky.io/v3/52a302bc-3eb1-4f30-8d72-1d9986f93499?mocky-delay=800ms'
  );
  return response.data.list;
}
