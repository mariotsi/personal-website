import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const salute = screen.getByText(/Hello, I'm Simone/i);
  expect(salute).toBeInTheDocument();
});
