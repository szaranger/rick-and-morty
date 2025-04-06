import type { Meta, StoryObj } from '@storybook/react';
import CharacterModal from '../../../components/info/CharacterModal';
import { ChakraProvider } from '@chakra-ui/react';

const meta: Meta<typeof CharacterModal> = {
  title: 'Components/Info/CharacterModal',
  component: CharacterModal,
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
type Story = StoryObj<typeof CharacterModal>;

const mockCharacter = {
  id: '1',
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  species: 'Human',
  status: 'Alive',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)'
  },
  location: {
    name: 'Earth (Replacement Dimension)'
  },
  episode: [
    {
      name: 'Pilot'
    }
  ]
};

export const Default: Story = {
  args: {
    character: mockCharacter,
    isOpen: true,
    onClose: () => console.log('Modal closed'),
  },
};

export const DeadCharacter: Story = {
  args: {
    character: {
      ...mockCharacter,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Dead',
    },
    isOpen: true,
    onClose: () => console.log('Modal closed'),
  },
};

export const Closed: Story = {
  args: {
    character: mockCharacter,
    isOpen: false,
    onClose: () => console.log('Modal closed'),
  },
}; 