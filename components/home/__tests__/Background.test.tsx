import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { Background } from '../Background';

describe('Background', () => {
  it('renders the background image', () => {
    render(<Background />);
    
    // Check if the background image is rendered
    const backgroundImage = screen.getByAltText('Falling Rick and Morty Background');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', '/falling.jpg');
  });

  it('renders the dark overlay', () => {
    render(<Background />);
    
    // Check if the dark overlay is rendered
    const darkOverlay = screen.getByTestId('dark-overlay');
    expect(darkOverlay).toBeInTheDocument();
    expect(darkOverlay).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });
  });
}); 