import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastInput as BastInputComponent } from '../../lib/entities/BastInput';

const meta = {
  title: 'Example/BastInput',
  component: BastInputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: { onChange: fn(), disabled: false, debounce: 0 },
} satisfies Meta<typeof BastInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastInput: Story = {
  args: {
    debounce: 100,
  },
};
