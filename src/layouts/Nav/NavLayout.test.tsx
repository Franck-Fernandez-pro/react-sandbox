import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavLayout from './NavLayout';

describe('<NavLayout />', () => {
  test('it should mount', () => {
    render(<NavLayout />);

    const nav = screen.getByTestId('nav-layout');
    expect(nav).toBeInTheDocument();
  });
});
