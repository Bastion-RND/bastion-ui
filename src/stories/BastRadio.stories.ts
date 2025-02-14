import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BastRadio as BastRadioComponent } from '../../lib/entities/BastRadio';

const meta = {
  title: 'Example/BastRadio',
  component: BastRadioComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn(), disabled: false, checked: false },
} satisfies Meta<typeof BastRadioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastRadio: Story = { args: {} };
