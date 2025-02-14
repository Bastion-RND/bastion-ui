import type { Meta, StoryObj } from '@storybook/react';

import { BastProgress as BastProgressComponent } from '../../lib/entities/BastProgress';

const meta = {
  title: 'Example/BastProgress',
  component: BastProgressComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BastProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastProgress: Story = {
  args: {
    style: { width: '300px' },
    progress: 50,
  }
};