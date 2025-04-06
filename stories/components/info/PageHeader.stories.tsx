import type { Meta, StoryObj } from '@storybook/react';
import PageHeader from '../../../components/info/PageHeader';
import { ChakraProvider } from '@chakra-ui/react';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/Info/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'padded',
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
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {},
}; 