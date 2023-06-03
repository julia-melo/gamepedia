import { useLoaderData } from 'react-router-dom';
import Card from '@/components/card/Card';
import { GameDetailsLoader } from './loader';

export default function GameDetails() {
  const { details } = useLoaderData() as GameDetailsLoader;

  return (
    <>
      <Card title={details.title} head={details.slug} image={details.img} />
      <Card title={details.title} head={details.slug} image={details.img} />
      <Card title={details.title} head={details.slug} image={details.img} />
      <Card title={details.title} head={details.slug} image={details.img} />
    </>
  );
}
