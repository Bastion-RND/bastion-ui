import type { Meta, StoryObj } from '@storybook/react';

import { BastSpinner as BastSpinnerComponent } from '../../lib/entities/spinner';

const meta = {
  title: 'Business/BastSpinner',
  component: BastSpinnerComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof BastSpinnerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastSpinner: Story = {};