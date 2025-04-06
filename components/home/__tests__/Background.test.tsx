import { render, screen } from '@testing-library/react';
import { jest, describe, it, expect } from '@jest/globals';
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

  it('renders the Rick Sanchez overlay', () => {
    render(<Background />);
    
    // Check if the Rick Sanchez overlay is rendered
    const rickOverlay = screen.getByTestId('rick-overlay');
    expect(rickOverlay).toBeInTheDocument();
    expect(rickOverlay).toHaveStyle({
      backgroundImage: "url('https://rickandmortyapi.com/api/character/avatar/1.jpeg')",
      opacity: '0.05',
    });
  });
}); 