import type { Meta, StoryObj } from '@storybook/react';

import { BastFooter as BastFooterComponent } from '../../lib/widgets/footer';

const meta = {
  title: 'Business/BastFooter',
  component: BastFooterComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'utility'],
  args: {
    children: 'Any content',
    className: '',
    style: {},
    id: '',
    isFloating: false,
    color: 'brand',
  },
} satisfies Meta<typeof BastFooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const BastFooter: Story = {
  args: {},
  argTypes: {},
};
