import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WelcomeCard } from '../WelcomeCard';

// Mock the next/link component
jest.mock('next/link', () => {
  const NextLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  NextLink.displayName = 'NextLink';
  return NextLink;
});

describe('WelcomeCard', () => {
  const mockProps = {
    username: 'Rick',
    jobTitle: 'Scientist',
    onEditClick: jest.fn(),
  };

  it('renders the welcome message with the correct username', () => {
    render(<WelcomeCard {...mockProps} />);
    
    expect(screen.getByTestId('welcome-heading')).toHaveTextContent(`Welcome, ${mockProps.username}!`);
    expect(screen.getByTestId('job-title')).toHaveTextContent(mockProps.jobTitle);
  });

  it('calls onEditClick when the edit button is clicked', () => {
    render(<WelcomeCard {...mockProps} />);
    
    const editButton = screen.getByTestId('edit-profile-button');
    fireEvent.click(editButton);
    
    expect(mockProps.onEditClick).toHaveBeenCalled();
  });

  it('renders a link to the information page', () => {
    render(<WelcomeCard {...mockProps} />);
    
    const infoLink = screen.getByText('Visit Information Page');
    expect(infoLink).toBeInTheDocument();
    expect(infoLink.closest('a')).toHaveAttribute('href', '/info?page=1');
  });
}); 