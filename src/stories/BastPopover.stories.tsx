import type { Meta, StoryObj } from '@storybook/react';

import { BastButton } from '../../lib/entities/button';
import { BastList } from '../../lib/entities/list';
import { BastPopover as BastPopoverComponent } from '../../lib/widgets/popover';

const meta = {
  title: 'Business/BastPopover',
  component: BastPopoverComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'utility'],
  args: {
    children: <BastButton>trigger</BastButton>,
    trigger: 'click',
    content: (
      <BastList inset>
        <BastList.Item onClick={() => console.log('click')}>test</BastList.Item>
        <BastList.Item>test</BastList.Item>
        <BastList.Item>test</BastList.Item>
        <BastList.Item>test</BastList.Item>
      </BastList>
    ),
    placement: 'auto',
  },
} satisfies Meta<typeof BastPopoverComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastPopover: Story = {
  args: {},
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'right',
        'left',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
    }
  },
};
