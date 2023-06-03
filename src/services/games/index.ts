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
    'https://run.mocky.io/v3/c33e71b0-46ff-4098-a6bb-2901166e0f82?mocky-delay=800ms'
  );
  return response.data.list;
}
