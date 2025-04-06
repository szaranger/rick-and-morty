import { render, screen, fireEvent } from '@testing-library/react';
import { jest, describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import { EditProfileModal } from '../EditProfileModal';

describe('EditProfileModal', () => {
  const mockProps = {
    isOpen: true,
    onClose: jest.fn(),
    formData: {
      username: 'Test User',
      jobTitle: 'Software Engineer',
    },
    onInputChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('renders the modal with form fields when isOpen is true', () => {
    render(<EditProfileModal {...mockProps} />);
    
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Job Title')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(<EditProfileModal {...mockProps} isOpen={false} />);
    
    expect(screen.queryByLabelText('Username')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Job Title')).not.toBeInTheDocument();
  });

  it('calls onInputChange when input fields are changed', () => {
    render(<EditProfileModal {...mockProps} />);
    
    const usernameInput = screen.getByLabelText('Username');
    const jobTitleInput = screen.getByLabelText('Job Title');
    
    fireEvent.change(usernameInput, { target: { value: 'New Username' } });
    fireEvent.change(jobTitleInput, { target: { value: 'New Job Title' } });
    
    expect(mockProps.onInputChange).toHaveBeenCalledTimes(2);
  });

  it('calls onSubmit when the form is submitted', () => {
    render(<EditProfileModal {...mockProps} />);
    
    const form = screen.getByRole('dialog').querySelector('form');
    expect(form).toBeInTheDocument();
    
    fireEvent.submit(form!);
    
    expect(mockProps.onSubmit).toHaveBeenCalled();
  });

  it('calls onClose when the cancel button is clicked', () => {
    render(<EditProfileModal {...mockProps} />);
    
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    
    expect(mockProps.onClose).toHaveBeenCalled();
  });
}); 