/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Task2Content from '../pages/Task2Content';

describe('Task2Content Component', () => {
  test('renders without crashing', () => {
    render(<Task2Content />);
    expect(screen.getByPlaceholderText(/Enter a number/i)).toBeInTheDocument();
  });
});
