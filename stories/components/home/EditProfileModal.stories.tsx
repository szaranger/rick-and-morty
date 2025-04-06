import type { Meta, StoryObj } from '@storybook/react';
import { EditProfileModal } from '../../../components/home/EditProfileModal';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

const meta: Meta<typeof EditProfileModal> = {
  title: 'Components/Home/EditProfileModal',
  component: EditProfileModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EditProfileModal>;

// Create a wrapper component to handle state
const EditProfileModalWithState = (props: { formData: { username: string; jobTitle: string } }) => {
  const [formData, setFormData] = useState(props.formData);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: { username: string; jobTitle: string }) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with values:', formData);
  };
  
  return (
    <EditProfileModal
    isOpen={false} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } {...props}
    formData={formData}
    onInputChange={handleInputChange}
    onSubmit={handleSubmit}    />
  );
};

export const Default: Story = {
  render: (args) => <EditProfileModalWithState {...args} />,
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    formData: {
      username: 'John Doe',
      jobTitle: 'Software Engineer',
    },
  },
};

export const EmptyInitialValues: Story = {
  render: (args) => <EditProfileModalWithState {...args} />,
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    formData: {
      username: '',
      jobTitle: '',
    },
  },
}; 