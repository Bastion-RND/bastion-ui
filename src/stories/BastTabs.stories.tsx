import type { Meta, StoryObj } from '@storybook/react';

import { BastTabs as BastTabsComponent } from '../../lib/widgets/tabs';

const meta = {
  title: 'Business/BastTabs',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<BastTabs disabled={false} iconOnly={false} borders="round-all">
  <BastTabs.Item disabled> Default </BastTabs.Item>
  <BastTabs.Item> Default </BastTabs.Item>
  <BastTabs.Item> Default </BastTabs.Item>
  <BastTabs.Item> Default </BastTabs.Item>
</BastTabs>
        `,
      },
    },
  },
  tags: ['autodocs', 'business'],
  component: BastTabsComponent,
  args: {
    borders: 'round-all',
    iconOnly: false,
    disabled: false,
    children: (
      <>
        <BastTabsComponent.Item disabled> Default </BastTabsComponent.Item>
        <BastTabsComponent.Item> Default </BastTabsComponent.Item>
        <BastTabsComponent.Item> Default </BastTabsComponent.Item>
        <BastTabsComponent.Item> Default </BastTabsComponent.Item>
      </>
    ),
  },
} satisfies Meta<typeof BastTabsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastTabs: Story = {
  args: {},
  argTypes: {
    borders: {
      control: 'select',
      options: ['round-top', 'round-bottom', 'round-all'],
      table: {
        type: { summary: 'round-top | round-bottom | round-all' },
      },
    },
  },
};
