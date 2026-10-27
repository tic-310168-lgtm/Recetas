import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows recipes and opens a recipe', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Recetas' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Nachos con queso' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Omelet de huevo' })).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('button', { name: 'Ver receta...' })[0]);

  expect(screen.getByText('Totopos')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Cerrar receta' })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
});
