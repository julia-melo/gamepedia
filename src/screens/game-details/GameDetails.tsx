import { useLoaderData } from 'react-router-dom';
import { GameDetailsLoader } from './loader';

export default function GameDetails() {
  const { details } = useLoaderData() as GameDetailsLoader;

  return <>{details.title}</>;
}
