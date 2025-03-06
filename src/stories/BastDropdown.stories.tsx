import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastDropdown as BastDropdownComponent } from '../../lib/widgets/dropdown';

const meta = {
  title: 'Business/BastDropdown',
  component: BastDropdownComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: { onChange: fn() },
} satisfies Meta<typeof BastDropdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastDropdown: Story = {
  args: {
    children: (
      <>
        <BastDropdownComponent.Option value="0">Значение 1</BastDropdownComponent.Option>
        <BastDropdownComponent.Option value="1">Значение 2</BastDropdownComponent.Option>
        <BastDropdownComponent.Option value="2">Значение 3</BastDropdownComponent.Option>
        <BastDropdownComponent.Option>1</BastDropdownComponent.Option>
        <BastDropdownComponent.Option>1</BastDropdownComponent.Option>
      </>
    ),
    label: 'Label',
    placeholder: 'Найти человека 2222',
    value: '1',
  },
};
