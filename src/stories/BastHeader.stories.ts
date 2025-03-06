import type { Meta, StoryObj } from '@storybook/react';

import { BastHeader as BastHeaderComponent } from '../../lib/widgets/header';

const meta = {
  title: 'Business/BastHeader',
  component: BastHeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'utility'],
  args: { logo: 'bast', children: 'Any content', className: '', style: {}, id: '' },
} satisfies Meta<typeof BastHeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastHeader: Story = {
  args: {},
  argTypes: {},
};
