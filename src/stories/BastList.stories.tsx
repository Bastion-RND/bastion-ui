import type { Meta, StoryObj } from '@storybook/react';

import { BastList as BastListComponent } from '../../lib/entities/BastList';

const meta = {
  title: 'Example/BastList',
  component: BastListComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <BastListComponent.Item>Элемент списка 1</BastListComponent.Item>
        <BastListComponent.Item>Элемент списка 2</BastListComponent.Item>
        <BastListComponent.Item>Элемент списка 3</BastListComponent.Item>
      </>
    ),
  },
} satisfies Meta<typeof BastListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastList: Story = {
  args: {},
};
