import type { Meta, StoryObj } from '@storybook/react';

import { BastSpinner as BastSpinnerComponent } from '../../lib/entities/BastSpinner';

const meta = {
  title: 'Example/BastSpinner',
  component: BastSpinnerComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BastSpinnerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastSpinner: Story = {};