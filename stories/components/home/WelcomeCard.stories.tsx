import type { Meta, StoryObj } from '@storybook/react';
import { WelcomeCard } from '../../../components/home/WelcomeCard';

const meta: Meta<typeof WelcomeCard> = {
  title: 'Components/Home/WelcomeCard',
  component: WelcomeCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WelcomeCard>;

export const Default: Story = {
  args: {
    username: 'John Doe',
    jobTitle: 'Software Engineer',
  },
};

export const LongName: Story = {
  args: {
    username: 'Christopher Alexander Johnson-Smith',
    jobTitle: 'Senior Full Stack Developer',
  },
};

export const ShortName: Story = {
  args: {
    username: 'Ali',
    jobTitle: 'Dev',
  },
}; 