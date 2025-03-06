import type { Meta, StoryObj } from '@storybook/react';

import { BastBatteryIndicator as BastBatteryIndicatorComponent } from '../../lib/widgets/batteryIndicator';

const meta = {
  title: 'Business/BastBatteryIndicator',
  component: BastBatteryIndicatorComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: {},
} satisfies Meta<typeof BastBatteryIndicatorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastBatteryIndicator: Story = {
  args: {
    percent: 50,
    isCharging: true,
  },
  argTypes: {
    percent: {
      control: 'range',
    }
  }
};
