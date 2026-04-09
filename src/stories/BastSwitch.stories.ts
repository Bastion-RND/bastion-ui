import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastSwitch as BastSwitchComponent } from '../../lib/entities/switch';

const meta = {
  title: 'Business/BastSwitch',
  component: BastSwitchComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: { onChange: fn(), disabled: false, checked: true, color: 'brand' },
} satisfies Meta<typeof BastSwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastSwitch: Story = { args: {} };
BastSwitch.parameters = {
  docs: {
    source: {
      code: `<BastSwitch checked disabled={false} color='brand' onChange={() => {}}  />`,
    },
  },
};
