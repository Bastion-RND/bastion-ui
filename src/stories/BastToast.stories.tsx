import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastToastWithoutPortal } from '../../lib/widgets/toast';

const meta = {
  title: 'Business/BastToast',
  component: BastToastWithoutPortal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof BastToastWithoutPortal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastToast: Story = {
  args: {
    color: 'success',
    autoClose: false,
    text: 'Какое-то прикольное уведомление',
    duration: 5000,
    onClose: fn(),
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['brand', 'gray', 'success', 'warning', 'danger'],
      table: {
        type: { summary: 'brand | gray | success | warning | danger' },
      },
    },
  },
};
