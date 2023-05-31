import { render } from '@testing-library/react';

import GameDetails from './GameDetails';

vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn().mockReturnValue({ details: { title: 'Hogwarts Legacy' } }),
}));

describe('GameDetails', () => {
  it('renders headline', () => {
    const { getByText } = render(<GameDetails />);
    getByText(/Hogwarts Legacy/);
  });
});
