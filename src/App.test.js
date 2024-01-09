import { render, screen } from '@testing-library/react';
import Lending from './Lending';

test('renders learn react link', () => {
  render(<Lending />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
