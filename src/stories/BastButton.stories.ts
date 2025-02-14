import '../../lib/app/styles/_button.scss';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastButton as BastButtonComponent } from '../../lib/entities/BastButton';

const meta = {
  title: 'Example/BastButton',
  component: BastButtonComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof BastButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastButton: Story = {
  args: {
    color: 'brand',
    children: 'BastButton',
    size: 'large',
    fill: 'filled'
  },
};
