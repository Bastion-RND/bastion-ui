import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastRadio as BastRadioComponent } from '../../lib/entities/BastRadio';

const meta = {
  title: 'Example/BastRadio',
  component: BastRadioComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn(), disabled: false, checked: false },
} satisfies Meta<typeof BastRadioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastRadio: Story = { args: {} };
