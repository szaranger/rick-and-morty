import type { Meta, StoryObj } from '@storybook/react';
import { Background } from '../../../components/home/Background';

const meta: Meta<typeof Background> = {
  title: 'Components/Home/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
  args: {},
};

export const WithCustomOverlay: Story = {
  args: {
    overlayOpacity: 0.8,
  },
}; 