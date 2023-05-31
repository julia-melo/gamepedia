import { useLoaderData } from 'react-router-dom';
import { GameDetailsLoader } from './game-details-loader';

export default function GameDetails() {
  const { details } = useLoaderData() as GameDetailsLoader;

  return <>Game details component - {details.title}</>;
}
