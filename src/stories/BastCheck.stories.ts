import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastCheck as BastCheckComponent } from '../../lib/entities/BastCheck';

const meta = {
  title: 'Business/BastCheck',
  component: BastCheckComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: { onChange: fn(), disabled: false, checked: false, label: 'Label' },
} satisfies Meta<typeof BastCheckComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastCheck: Story = { args: {} };
BastCheck.parameters = {
  docs: {
    source: {
      code: `<BastCheck checked disabled={false} label='Label' onChange={() => {}}  />`,
    },
  },
};
