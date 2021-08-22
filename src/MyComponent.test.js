import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('checking if element filter works', () => {
    render(<MyComponent />);
    expect(screen.getByText('Random stuff that does not exist...')).toBeInTheDocument();
});
