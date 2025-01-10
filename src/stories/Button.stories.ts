import { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    type: { 
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'danger'] 
    },
    size: { 
      control: { type: 'select' }, 
      options: ['small', 'medium', 'large'] 
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    label: 'Primary Small',
    type: 'primary',
    size: 'small',
  },
};

export const PrimaryMedium: Story = {
  args: {
    label: 'Primary Medium',
    type: 'primary',
    size: 'medium',
  },
};

export const PrimaryLarge: Story = {
  args: {
    label: 'Primary Large',
    type: 'primary',
    size: 'large',
  },
};

export const SecondarySmall: Story = {
  args: {
    label: 'Secondary Small',
    type: 'secondary',
    size: 'small',
  },
};

export const SecondaryMedium: Story = {
  args: {
    label: 'Secondary Medium',
    type: 'secondary',
    size: 'medium',
  },
};

export const SecondaryLarge: Story = {
  args: {
    label: 'Secondary Large',
    type: 'secondary',
    size: 'large',
  },
};

export const DangerSmall: Story = {
  args: {
    label: 'Danger Small',
    type: 'danger',
    size: 'small',
  },
};

export const DangerMedium: Story = {
  args: {
    label: 'Danger Medium',
    type: 'danger',
    size: 'medium',
  },
};

export const DangerLarge: Story = {
  args: {
    label: 'Danger Large',
    type: 'danger',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    type: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    type: 'primary',
    size: 'medium',
    loading: true,
    disabled: false
  },
};