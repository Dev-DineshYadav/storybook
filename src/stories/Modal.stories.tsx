import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/Modal';
import Card from '@/components/Card';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  parameters: {
    docs: {
      story: { inline: true, height: '500px' },
    },
  },
  args: {
    title: 'Default Modal',
    content: 'Default modal with a close button',
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => <Modal key={args.content as string} {...args} />,
};

export const WithDynamicContent: Story = {
  parameters: {
    docs: {
      story: { inline: true, height: '500px' },
    },
  },
  args: {
    title: 'Dynamic Content Modal',
    content: <Card 
      title='Card with Image'
      description='This is a card with an image and a button.'
      image='https://random-image-pepebigotes.vercel.app/api/random-image' 
      onClick={() => alert('You have clicked on a button')}/>,
    onClose: () => console.log('Modal closed'),
  },
};

export const FullscreenMobile: Story = {
  parameters: {
    docs: {
      story: { inline: true, height: '500px' },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    title: 'Fullscreen Mobile Modal',
    content: 'This modal takes up the full screen on mobile devices.',
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => <Modal key={args.content as string} {...args} />,
};