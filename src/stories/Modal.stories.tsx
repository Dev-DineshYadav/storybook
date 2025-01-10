import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/Modal';
import Card from '@/components/Card';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Default Modal',
    content: 'Default modal with a close button',
    onClose: () => console.log('Modal closed'),
  },
};

export const WithDynamicContent: Story = {
  args: {
    isOpen: true,
    title: 'Dynamic Content Modal',
    content: <Card title='Card with Image'
    description='This is a card with an image and a button.'
    image='https://random-image-pepebigotes.vercel.app/api/random-image' 
    onClick={() => alert('You have clicked on a button')}/>,
    onClose: () => console.log('Modal closed'),
  },
};

export const FullscreenMobile: Story = {
  args: {
    isOpen: true,
    title: 'Fullscreen Mobile Modal',
    content: 'This modal takes up the full screen on mobile devices.',
    onClose: () => console.log('Modal closed'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};