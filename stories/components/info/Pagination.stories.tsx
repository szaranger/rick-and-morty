import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../../../components/info/Pagination';
import { ChakraProvider } from '@chakra-ui/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Info/Pagination',
  component: Pagination,
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
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    hasPrevPage: false,
    hasNextPage: true,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    hasPrevPage: true,
    hasNextPage: true,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 42,
    hasPrevPage: true,
    hasNextPage: false,
  },
}; 