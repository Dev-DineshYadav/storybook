import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This is a card with an image and a button.',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    onClick: () => alert('Button clicked!'),
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Card without Image',
    description: "This is a card without an image.",
    onClick: () => alert('Button clicked!'),
  },
};

export const LongContent: Story = {
  args: {
    title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  ",
    description: "\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor \n  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n",
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    onClick: () => alert('Button clicked!'),
  },
};

export const WithButtonClick: Story = {
  args: {
    title: 'A card with a button click handler',
    description: 'This card has button interaction.',
    image: 'https://random-image-pepebigotes.vercel.app/api/random-image',
    onClick: () => alert('Button clicked!'),
  },
};