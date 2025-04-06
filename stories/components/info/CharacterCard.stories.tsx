import type { Meta, StoryObj } from '@storybook/react';
import CharacterCard from '../../../components/info/CharacterCard';

const meta: Meta<typeof CharacterCard> = {
  title: 'Components/Info/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    character: {
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
    },
    onClick: () => console.log('Character card clicked'),
  },
};

export const DeadCharacter: Story = {
  args: {
    character: {
      id: '2',
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      species: 'Human',
      status: 'Dead',
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
    },
    onClick: () => console.log('Character card clicked'),
  },
}; 