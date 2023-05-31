import axios from 'axios';
import { IGameDetails } from '@/types/game-details';

export async function getGameDetails(_slug: string): Promise<IGameDetails> {
  const response = await axios.get(
    'https://run.mocky.io/v3/b9e760a6-2ef4-4a28-9b9a-8fb4b5174165?mocky-delay=800ms'
  );
  return response.data;
}
