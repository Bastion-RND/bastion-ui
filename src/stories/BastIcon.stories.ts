import type { Meta, StoryObj } from '@storybook/react';

import { BastIcon as BastIconComponent } from '../../lib/entities/BastIcon';

const meta = {
  title: 'Business/BastIcon',
  component: BastIconComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: { name: 'Bast' },
} satisfies Meta<typeof BastIconComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastIcon: Story = { args: {} };