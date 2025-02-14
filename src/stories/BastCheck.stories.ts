import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastCheck as BastCheckComponent } from '../../lib/entities/BastCheck';

const meta = {
  title: 'Example/BastCheck',
  component: BastCheckComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn(), disabled: false, checked: false },
} satisfies Meta<typeof BastCheckComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastCheck: Story = { args: {} };